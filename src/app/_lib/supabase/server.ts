"use server";

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY!;
const SUPABASE_URL = process.env.SUPABASE_URL!;

export async function createClient() {

  const cookieStore = await cookies();

  return createServerClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY,
    {
      cookies: {

        getAll() {
          return cookieStore.getAll();
        },


        setAll(cookiesToSet) {

          try {

            cookiesToSet.forEach(
              ({ name, value, options }) =>
                cookieStore.set(
                  name,
                  value,
                  options
                )
            );

          } catch {}

        },

      },
    }
  );
}