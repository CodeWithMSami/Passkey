"use server";

import { redirect } from "next/navigation";
import { createClient } from "../_lib/supabase/server";

export default async function logout() {

  const supabase = await createClient();

  await supabase.auth.signOut();

  redirect("/login");

}