import type { Metadata } from "next";
import { SubmitButton } from "../_component/Submitbtn";
import Link from "next/link";
import { login } from "../_actions/auth";

export const metadata: Metadata = {
  title: "Login — Passkey",
  description:
    "Login to your Passkey account and securely manage your passwords.",
};

export default function LoginPage() {
  return (
    <main>

      {/* Hero */}
      <section className="pt-40 border-b">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
            Welcome Back
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold text-primary">
            Login To Passkey
          </h1>

          <p className="mt-6 text-lg md:text-xl text-primary/70 max-w-2xl mx-auto">
            Access your secure password vault and manage your credentials
            safely from anywhere.
          </p>

        </div>
      </section>


      {/* Login Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">


          {/* Login Form */}
          <div className="border rounded-3xl p-8">

            <h2 className="text-3xl font-bold text-primary mb-6">
              Sign In
            </h2>


            <form className="space-y-5" action={login}>

              <div>
                <label className="block mb-2 text-primary/80 font-medium">
                  Email Address
                </label>

                <input
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full border rounded-xl px-4 py-3 outline-none border-primary/70 focus:ring-2 focus:ring-primary/20 text-primary"
                />
              </div>


              <div>
                <label className="block mb-2 text-primary/80 font-medium">
                  Password
                </label>

                <input
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full border rounded-xl px-4 py-3 outline-none border-primary/70 focus:ring-2 focus:ring-primary/20 text-primary"
                />
              </div>


              <div className="flex justify-between items-center text-sm">

                <label className="flex items-center gap-2 text-primary/70">
                  <input
                    type="checkbox"
                    className="rounded"
                  />
                  Remember me
                </label>

              </div>


              <SubmitButton />


              <p className="text-center text-primary/70 text-sm">
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  className="text-primary font-semibold"
                >
                  Create Account
                </Link>
              </p>


            </form>

          </div>



          {/* Information */}
          <div className="space-y-6">


            <div className="border rounded-3xl p-8">

              <h3 className="text-2xl font-semibold text-primary">
                Secure Access
              </h3>


              <p className="mt-4 text-primary/70">
                Your account is protected with modern security practices
                designed to keep your passwords safe.
              </p>


              <div className="mt-8 space-y-5">


                <div>
                  <p className="font-semibold text-primary">
                    🔒 Encrypted Protection
                  </p>

                  <p className="text-primary/70">
                    Your vault data remains private and secure.
                  </p>
                </div>


                <div>
                  <p className="font-semibold text-primary">
                    ⚡ Quick Access
                  </p>

                  <p className="text-primary/70">
                    Instantly access your saved credentials.
                  </p>
                </div>


                <div>
                  <p className="font-semibold text-primary">
                    🛡 Account Security
                  </p>

                  <p className="text-primary/70">
                    Built to protect your digital identity.
                  </p>
                </div>


              </div>

            </div>



            <div className="rounded-3xl bg-primary text-secondary p-8">

              <h3 className="text-2xl font-semibold">
                Forgot Your Password?
              </h3>

              <p className="mt-4 opacity-80">
                No worries. You can reset your password and regain access
                to your secure Passkey account.
              </p>

            </div>


          </div>


        </div>
      </section>

    </main>
  );
}