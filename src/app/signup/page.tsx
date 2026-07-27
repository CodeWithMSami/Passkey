import type { Metadata } from "next";
import { SubmitButton } from "../_component/Submitbtn";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create Account — Passkey",
  description:
    "Create your Passkey account and start securing your passwords with encrypted storage.",
};

export default function SignupPage() {
  return (
    <main>

      {/* Hero */}
      <section className="pt-40 border-b">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
            Join Passkey
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold text-primary">
            Create Your Secure Account
          </h1>

          <p className="mt-6 text-lg md:text-xl text-primary/70 max-w-2xl mx-auto">
            Start managing your passwords securely with encrypted storage
            built for privacy and protection.
          </p>

        </div>
      </section>


      {/* Signup Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">


          {/* Signup Form */}
          <div className="border rounded-3xl p-8">

            <h2 className="text-3xl font-bold text-primary mb-6">
              Create Account
            </h2>


            <form className="space-y-5">

              <div>
                <label className="block mb-2 text-primary/80 font-medium">
                  Username
                </label>

                <input
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full border rounded-xl px-4 py-3 outline-none border-primary/70 focus:ring-2 focus:ring-primary/20"
                />
              </div>


              <div>
                <label className="block mb-2 text-primary/80 font-medium">
                  Email Address
                </label>

                <input
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full border rounded-xl px-4 py-3 outline-none border-primary/70 focus:ring-2 focus:ring-primary/20"
                />
              </div>


              <div>
                <label className="block mb-2 text-primary/80 font-medium">
                  Password
                </label>

                <input
                  name="password"
                  type="password"
                  placeholder="Create a strong password"
                  className="w-full border rounded-xl px-4 py-3 outline-none border-primary/70 focus:ring-2 focus:ring-primary/20"
                />
              </div>


              <div>
                <label className="block mb-2 text-primary/80 font-medium">
                  Confirm Password
                </label>

                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full border rounded-xl px-4 py-3 outline-none border-primary/70 focus:ring-2 focus:ring-primary/20"
                />
              </div>


              <SubmitButton />

              <p className="text-center text-primary/70 text-sm">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-primary font-semibold"
                >
                  Login
                </Link>
              </p>

            </form>

          </div>



          {/* Information */}
          <div className="space-y-6">


            <div className="border rounded-3xl p-8">

              <h3 className="text-2xl font-semibold text-primary">
                Why Choose Passkey?
              </h3>

              <p className="mt-4 text-primary/70">
                Your passwords deserve strong protection. Passkey helps you
                store and manage your credentials securely.
              </p>


              <div className="mt-8 space-y-5">

                <div>
                  <p className="font-semibold text-primary">
                    🔐 Encrypted Storage
                  </p>

                  <p className="text-primary/70">
                    Your sensitive information stays protected.
                  </p>
                </div>


                <div>
                  <p className="font-semibold text-primary">
                    🚀 Easy Access
                  </p>

                  <p className="text-primary/70">
                    Manage your passwords anytime, anywhere.
                  </p>
                </div>


                <div>
                  <p className="font-semibold text-primary">
                    🛡 Privacy First
                  </p>

                  <p className="text-primary/70">
                    Built with security and user privacy in mind.
                  </p>
                </div>


              </div>

            </div>



            <div className="rounded-3xl bg-primary text-secondary p-8">

              <h3 className="text-2xl font-semibold">
                Your Security Matters
              </h3>

              <p className="mt-4 opacity-80">
                Create your account and take control of your digital identity
                with secure password management.
              </p>

            </div>


          </div>


        </div>
      </section>

    </main>
  );
}