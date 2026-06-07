import { supabase } from "@/lib/supabaseClient";

export async function POST(req) {
  const { email, intent, painPoints } = await req.json();

  if (!email) {
    return Response.json({ error: "Email required" }, { status: 400 });
  }

  const record = {
    email,
    ...(Array.isArray(intent) && intent.length > 0 && { intent }),
    ...(Array.isArray(painPoints) && painPoints.length > 0 && { pain_points: painPoints }),
  };

  const { data, error } = await supabase
    .from("EarlyUser")
    .insert([record]);
  console.log("Supabase response:", { data, error });
  // if (error) {
  //   return Response.json({ error: error.message }, { status: 400 });
  // }

  return Response.json({ success: true, data });
}