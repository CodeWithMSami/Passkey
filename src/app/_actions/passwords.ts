"use server";

import { createClient } from "@/app/_lib/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { decryptPassword, encryptPassword } from "@/app/_lib/encryption";


type ActionResponse = {
  success: boolean;
  message: string;
};



// Add password

export async function addPassword(
  formData: FormData
): Promise<ActionResponse> {

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
    return {
      success: false,
      message: "Required fields are missing",
    };
  }



  const supabase = await createClient();



  const {
    data: {
      user
    },
  } = await supabase.auth.getUser();



  if (!user) {
    return {
      success: false,
      message: "Please login first",
    };
  }



  const { error } =
    await supabase
      .from("passwords")
      .insert({

        user_id: user.id,

        name,

        username,

        encrypted_password: encryptPassword(password),

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
    return {
      success: false,
      message: error.message,
    };
  }



  revalidatePath("/passwords");



  return {
    success: true,
    message: "Password added successfully",
  };
}







// Update password

export async function updatePassword(
  formData: FormData
): Promise<ActionResponse> {

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
    return {
      success: false,
      message: "Required fields are missing",
    };
  }



  const supabase = await createClient();



  const { error } =
    await supabase
      .from("passwords")
      .update({

        name,

        username,

        encrypted_password: encryptPassword(password),

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
    return {
      success: false,
      message: error.message,
    };
  }



  revalidatePath("/passwords");



  return {
    success: true,
    message: "Password updated successfully",
  };
}







// Delete password

export async function deletePassword(
  id: string
): Promise<ActionResponse> {

  const supabase = await createClient();



  const { error } =
    await supabase
      .from("passwords")
      .delete()
      .eq(
        "id",
        id
      );



  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }



  revalidatePath("/passwords");



  return {
    success: true,
    message: "Password deleted successfully",
  };
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
      .maybeSingle();



  if (error) {
    redirect(
      `/passwords?error=${encodeURIComponent(error.message)}`
    );
  }



  return {
    ...data,

    encrypted_password:
      decryptPassword(
        data.encrypted_password
      ),
  };
}







// Get all passwords

export async function getPasswords() {

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



  return (
    data?.map((item) => ({
      ...item,

      encrypted_password:
        decryptPassword(
          item.encrypted_password
        ),

    })) ?? []
  );
}