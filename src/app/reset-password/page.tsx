import { resetPassword } from "../_actions/auth";
import { SubmitButton } from "../_component/Submitbtn";

export default async function ResetPasswordPage() {
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