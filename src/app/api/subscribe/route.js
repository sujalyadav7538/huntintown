import { supabase } from "@/lib/supabaseClient";

export async function POST(req) {
  const { email } = await req.json();

  if (!email) {
    return Response.json({ error: "Email required" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("EarlyUser")
    .insert([{ email }]);
  console.log("Supabase response:", { data, error });
  if (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }

  return Response.json({ success: true, data });
}