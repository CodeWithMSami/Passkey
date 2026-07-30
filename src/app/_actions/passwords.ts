"use server";

import { createClient } from "@/app/_lib/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { unstable_noStore as noStore } from "next/cache";


// Add password

export async function addPassword(
  formData: FormData
): Promise<void> {


  const name =
    formData.get("name") as string;

  const username =
    formData.get("username") as string;

  const password =
    formData.get("password") as string;

  const category =
    formData.get("category") as string;

  const tags =
    formData.get("tags") as string;

  const url =
    formData.get("url") as string;

  const notes =
    formData.get("notes") as string;



  if (!name || !username || !password) {

    redirect(
      "/passwords/add?error=Required fields are missing"
    );

  }



  const supabase = await createClient();



  const {
    data: {
      user
    },
  } = await supabase.auth.getUser();



  if (!user) {

    redirect(
      "/login?error=Please login first"
    );

  }



  const { error } =
    await supabase
      .from("passwords")
      .insert({

        user_id: user.id,

        name,

        username,

        // later replace with encryption
        encrypted_password: password,

        category:
          category || "Personal",

        tags:
          tags
            ? tags
                .split(",")
                .map(
                  (tag) => tag.trim()
                )
            : [],

        url:
          url || null,

        notes:
          notes || null,

      });



  if (error) {

    redirect(
      `/passwords/add?error=${encodeURIComponent(error.message)}`
    );

  }



  revalidatePath("/passwords/add");


  redirect(
    "/passwords?success=Password added successfully"
  );

}






// Update password

export async function updatePassword(
  formData: FormData
): Promise<void> {


  const id =
    formData.get("id") as string;

  const name =
    formData.get("name") as string;

  const username =
    formData.get("username") as string;

  const password =
    formData.get("password") as string;

  const category =
    formData.get("category") as string;

  const tags =
    formData.get("tags") as string;

  const url =
    formData.get("url") as string;

  const notes =
    formData.get("notes") as string;



  if (!name || !username || !password) {

    redirect(
      `/passwords/${id}/edit?error=Required fields are missing`
    );

  }



  const supabase = await createClient();



  const { error } =
    await supabase
      .from("passwords")
      .update({

        name,

        username,

        encrypted_password: password,

        category,

        tags:
          tags
            ? tags
                .split(",")
                .map(
                  (tag) => tag.trim()
                )
            : [],

        url:
          url || null,

        notes:
          notes || null,

        updated_at:
          new Date().toISOString(),

      })
      .eq(
        "id",
        id
      );



  if (error) {

    redirect(
      `/passwords/${id}/edit?error=${encodeURIComponent(error.message)}`
    );

  }



  revalidatePath("/passwords");


  redirect(
    "/passwords?success=Password updated successfully"
  );

}






// Delete password

export async function deletePassword(
  id: string
): Promise<void> {


  const supabase = await createClient();
  console.log(id);



  const { error } =
    await supabase
      .from("passwords")
      .delete()
      .eq(
        "id",
        id
      );



  if (error) {

    // redirect(
    //    `/passwords?error=${encodeURIComponent(error.message)}`
    // );

  }



  revalidatePath("/passwords");


  redirect(
    "/passwords?success=Password deleted successfully"
  );

}

// Get single password

export async function getPassword(
  id: string
) {


  const supabase = await createClient();



  const {
    data: {
      user
    },
  } =
    await supabase.auth.getUser();



  if (!user) {

    redirect(
      "/login?error=Please login first"
    );

  }



  const {
    data,
    error
  } =
    await supabase
      .from("passwords")
      .select("*")
      .eq("id", id)
      .eq("user_id", user.id)
      .single();



  if (error) {

    redirect(
      `/passwords?error=${encodeURIComponent(error.message)}`
    );

  }



  return data;

}






// Get all passwords

export async function getPasswords() {
  noStore();


  const supabase = await createClient();



  const {
    data: {
      user
    },
  } =
    await supabase.auth.getUser();



  if (!user) {

    redirect(
      "/login?error=Please login first"
    );

  }



  const {
    data,
    error
  } =
    await supabase
      .from("passwords")
      .select("*")
      .eq(
        "user_id",
        user.id
      )
      .order(
        "created_at",
        {
          ascending: false,
        }
      );



  if (error) {

    redirect(
      `/passwords?error=${encodeURIComponent(error.message)}`
    );

  }



  return data;

}