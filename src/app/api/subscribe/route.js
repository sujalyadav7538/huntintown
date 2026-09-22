import { supabase } from "@/lib/supabaseClient";
import nodemailer from "nodemailer";

function escapeHtml(value = "") {
  return String(value).replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character],
  );
}

export async function POST(req) {
  const { email, intent, painPoints, occupation } = await req.json();
  const normalizedEmail = email?.trim().toLowerCase();

  if (!normalizedEmail) {
    return Response.json({ error: "Email required" }, { status: 400 });
  }

  if (!/^\S+@\S+\.\S+$/.test(normalizedEmail)) {
    return Response.json(
      { error: "Enter a valid email address" },
      { status: 400 },
    );
  }

  const record = {
    email: normalizedEmail,
    ...(Array.isArray(intent) && intent.length > 0 && { intent }),
    ...(Array.isArray(painPoints) &&
      painPoints.length > 0 && { pain_points: painPoints }),
    ...(occupation && { occupation }),
  };

  const { data, error } = await supabase.from("EarlyUser").insert([record]);

  if (error) {
    console.error("Supabase insert failed:", error);

    return Response.json(
      { error: "Could not save your email" },
      { status: 500 },
    );
  }

  const emailUser = process.env.EMAIL_USER;
  const emailPassword = process.env.EMAIL_PASSWORD;

  if (!emailUser || !emailPassword) {
    console.error("Missing EMAIL_USER or EMAIL_PASSWORD");

    return Response.json({
      success: true,
      data,
      emailSent: false,
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });

    await transporter.verify();

    console.log("SMTP connection verified");

    const intentText =
      Array.isArray(intent) && intent.length > 0
        ? intent.join(", ")
        : "your skills and services";

    const safeIntentText = escapeHtml(intentText);

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "https://huntintown.com";

    const info = await transporter.sendMail({
      from: `"HuntInTown" <${emailUser}>`,
      to: normalizedEmail,
      subject: "You’re officially on the HuntInTown list 🎉",

      text: `Welcome to HuntInTown!

Thanks for joining early access. We’ll let you know when people are looking for ${intentText}.

What happens next:
1. We’ll notify you when relevant requirements go live.
2. You’ll review opportunities that match what you offer.
3. You’ll connect directly with the person who posted the requirement.

Explore HuntInTown: ${siteUrl}

— The HuntInTown team`,

      html: `
        <!doctype html>
        <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="color-scheme" content="light dark" />
            <title>Welcome to HuntInTown</title>
          </head>

          <body style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,Helvetica,sans-serif;color:#18181b;">

            <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
              You’re officially on the HuntInTown early-access list.
            </div>

            <table
              role="presentation"
              width="100%"
              cellspacing="0"
              cellpadding="0"
              border="0"
              style="background:#f4f4f5;padding:24px 12px;"
            >
              <tr>
                <td align="center">

                  <table
                    role="presentation"
                    width="100%"
                    cellspacing="0"
                    cellpadding="0"
                    border="0"
                    style="max-width:620px;background:#ffffff;border-radius:20px;overflow:hidden;"
                  >

                    <tr>
                      <td style="background:#09090b;padding:28px 32px;text-align:center;">
                        <div style="font-size:24px;font-weight:800;color:#ffffff;">
                          HuntIn<span style="color:#ef4444;">Town</span>
                        </div>

                        <div
                          style="margin-top:12px;display:inline-block;border:1px solid #7f1d1d;border-radius:999px;padding:6px 12px;color:#fca5a5;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;"
                        >
                          Founding member access
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:40px 32px 20px;">
                        <div style="font-size:36px;line-height:1;margin-bottom:18px;">
                          🎉
                        </div>

                        <h1 style="margin:0;font-size:30px;line-height:1.15;color:#18181b;">
                          You’re officially in.
                        </h1>

                        <p style="margin:18px 0 0;font-size:16px;line-height:1.7;color:#52525b;">
                          Thanks for joining HuntInTown’s early access. We’ll keep an eye out for people looking for
                          <strong style="color:#18181b;">
                            ${safeIntentText}
                          </strong>.
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:4px 32px 20px;">
                        <table
                          role="presentation"
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          border="0"
                          style="background:#fff1f2;border:1px solid #fecdd3;border-radius:14px;"
                        >
                          <tr>
                            <td style="padding:18px 20px;">
                              <div
                                style="font-size:13px;font-weight:700;color:#be123c;text-transform:uppercase;letter-spacing:.8px;"
                              >
                                Your next move
                              </div>

                              <div
                                style="margin-top:6px;font-size:15px;line-height:1.5;color:#4c0519;"
                              >
                                Keep your details ready. The best opportunities often move quickly.
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:10px 32px 12px;">
                        <h2 style="margin:0;font-size:20px;color:#18181b;">
                          How it works
                        </h2>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:0 32px 18px;">
                        <table
                          role="presentation"
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          border="0"
                        >

                          <tr>
                            <td width="42" valign="top">
                              <div
                                style="width:30px;height:30px;border-radius:50%;background:#fee2e2;color:#dc2626;text-align:center;line-height:30px;font-weight:700;"
                              >
                                1
                              </div>
                            </td>

                            <td style="padding:2px 0 16px;">
                              <strong>A need appears</strong>
                              <br />
                              <span style="font-size:14px;line-height:1.5;color:#71717a;">
                                Someone posts a requirement for a service, skill, or product.
                              </span>
                            </td>
                          </tr>

                          <tr>
                            <td width="42" valign="top">
                              <div
                                style="width:30px;height:30px;border-radius:50%;background:#fee2e2;color:#dc2626;text-align:center;line-height:30px;font-weight:700;"
                              >
                                2
                              </div>
                            </td>

                            <td style="padding:2px 0 16px;">
                              <strong>You find your fit</strong>
                              <br />
                              <span style="font-size:14px;line-height:1.5;color:#71717a;">
                                We’ll help you spot opportunities that match what you offer.
                              </span>
                            </td>
                          </tr>

                          <tr>
                            <td width="42" valign="top">
                              <div
                                style="width:30px;height:30px;border-radius:50%;background:#fee2e2;color:#dc2626;text-align:center;line-height:30px;font-weight:700;"
                              >
                                3
                              </div>
                            </td>

                            <td style="padding:2px 0;">
                              <strong>You connect directly</strong>
                              <br />
                              <span style="font-size:14px;line-height:1.5;color:#71717a;">
                                Show your fit and start a conversation with the person who needs you.
                              </span>
                            </td>
                          </tr>

                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td align="center" style="padding:18px 32px 38px;">
                        <a
                          href="${siteUrl}"
                          style="display:inline-block;background:#dc2626;border-radius:10px;padding:14px 24px;color:#ffffff;font-size:15px;font-weight:700;text-decoration:none;"
                        >
                          Explore HuntInTown →
                        </a>

                        <p style="margin:18px 0 0;font-size:12px;line-height:1.5;color:#a1a1aa;">
                          Free to join · No commission · No spam
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td
                        style="border-top:1px solid #e4e4e7;padding:22px 32px;text-align:center;"
                      >
                        <p style="margin:0;font-size:12px;line-height:1.5;color:#a1a1aa;">
                          You’re receiving this because you joined the HuntInTown early-access list.
                          <br />
                          © HuntInTown · Be picky. Don’t settle. Hunt better.
                        </p>
                      </td>
                    </tr>

                  </table>

                </td>
              </tr>
            </table>

          </body>
        </html>
      `,
    });

 

    const emailAccepted =
      Array.isArray(info.accepted) &&
      info.accepted.includes(normalizedEmail);

    return Response.json({
      success: true,
      data,
      emailSent: emailAccepted,
      email: true,
    });
  } catch (emailError) {
    console.error("Email sending failed:", emailError);

    return Response.json({
      success: true,
      data,
      emailSent: false,
      emailError: emailError.message,
    });
  }
}
