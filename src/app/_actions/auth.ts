"use server";

import { createClient } from "@/app/_lib/supabase/server";
import { redirect } from "next/navigation";


export async function signup(
  formData: FormData
): Promise<void> {


  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;



  if (!name || !email || !password || !confirmPassword) {

    redirect(
      "/signup?error=All fields are required"
    );

  }



  if (password !== confirmPassword) {

    redirect(
      "/signup?error=Passwords do not match"
    );

  }



  if (password.length < 8) {

    redirect(
      "/signup?error=Password must be at least 8 characters"
    );

  }




  const supabase = await createClient();



  const { error } = await supabase.auth.signUp({

    email,

    password,

    options: {

      data: {
        name,
      },

    },

  });




  if (error) {

    redirect(
      `/signup?error=${encodeURIComponent(error.message)}`
    );

  }



  redirect(
    "/passwords?success=Account created successfully"
  );

}

export async function login(
  formData: FormData
): Promise<void> {


  const email = formData.get("email") as string;

  const password = formData.get("password") as string;



  if (!email || !password) {

    redirect(
      "/login?error=Email and password are required"
    );

  }



  const supabase = await createClient();



  const { error } = await supabase.auth.signInWithPassword({

    email,

    password,

  });



  if (error) {

    redirect(
      `/login?error=${encodeURIComponent(error.message)}`
    );

  }



  redirect("/passwords?success=Logged in successfully!");

}