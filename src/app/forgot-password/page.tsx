import { forgotPassword } from "../_actions/auth";
import { SubmitButton } from "../_component/Submitbtn";

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">

      <div className="w-full max-w-md border rounded-3xl p-8">

        <h1 className="text-3xl font-bold text-primary">
          Forgot Password
        </h1>

        <p className="mt-2 text-primary/70">
          Enter your email to receive a reset link.
        </p>

        <form
          action={forgotPassword}
          className="mt-6 space-y-4"
        >

          <input
            name="email"
            type="email"
            placeholder="Email address"
            className="w-full border border-primary rounded-xl px-4 py-3 text-primary"
          />

          <SubmitButton />

        </form>

      </div>

    </main>
  );
}