import { resetPassword } from "../_actions/auth";
import { SubmitButton } from "../_component/Submitbtn";
import { createClient } from "../_lib/supabase/server";
import { redirect } from "next/navigation";

export default async function ResetPasswordPage() {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    // No authenticated recovery session
    if (!user) {
        redirect("/login");
    }

    return (
        <main className="min-h-screen flex items-center justify-center">

            <div className="w-full max-w-md border rounded-3xl p-8">

                <h1 className="text-3xl font-bold text-primary">
                    Reset Password
                </h1>

                <form
                    action={resetPassword}
                    className="mt-6 space-y-4"
                >

                    <input
                        name="password"
                        type="password"
                        placeholder="New Password"
                        className="w-full border rounded-xl px-4 py-3 text-primary"
                    />

                    <input
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        className="w-full border rounded-xl px-4 py-3 text-primary"
                    />

                    <SubmitButton />

                </form>

            </div>

        </main>
    );
}