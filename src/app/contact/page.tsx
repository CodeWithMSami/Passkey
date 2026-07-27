import type { Metadata } from "next";
import { SubmitButton } from "../_component/Submitbtn";

export const metadata: Metadata = {
  title: "Contact Us — Passkey",
  description:
    "Get in touch with the Passkey team for support, questions, or feedback.",
};

export default function ContactPage() {
  return (
    <main>

      {/* Hero */}
      <section className="pt-40 border-b">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
            Contact Passkey
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold text-primary">
            We're Here To Help
          </h1>

          <p className="mt-6 text-lg md:text-xl text-primary/70 max-w-2xl mx-auto">
            Have a question, need support, or want to share feedback?
            Our team is ready to assist you.
          </p>

        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div className="border rounded-3xl p-8">

            <h2 className="text-3xl font-bold text-primary mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-5">

              <div>
                <label className="block mb-2 text-primary/80 font-medium">
                  Full Name
                </label>

                <input
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
                  type="email"
                  placeholder="john@example.com"
                  className="w-full border rounded-xl px-4 py-3 outline-none border-primary/70 focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label className="block mb-2 text-primary/80 font-medium">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full border rounded-xl px-4 py-3 outline-none border-primary/70 focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label className="block mb-2 text-primary/80 font-medium">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full border rounded-xl px-4 py-3 outline-none border-primary/70 resize-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <SubmitButton />

            </form>

          </div>

          {/* Contact Information */}
          <div className="space-y-6">

            <div className="border rounded-3xl p-8">
              <h3 className="text-2xl font-semibold text-primary">
                Contact Information
              </h3>

              <p className="mt-4 text-primary/70">
                Reach out to us through any of the following channels.
              </p>

              <div className="mt-8 space-y-5">

                <div>
                  <p className="font-semibold text-primary">
                    Email
                  </p>

                  <p className="text-primary/70">
                    codewithmsami@gmail.com
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-primary">
                    Business
                  </p>

                  <p className="text-primary/70">
                    codewithmsami@gmail.com
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-primary">
                    Response Time
                  </p>

                  <p className="text-primary/70">
                    Within ∞
                  </p>
                </div>

              </div>
            </div>

            <div className="rounded-3xl bg-primary text-secondary p-8">
              <h3 className="text-2xl font-semibold">
                Security Questions?
              </h3>

              <p className="mt-4 opacity-80">
                If you have concerns regarding account security,
                password protection, or encrypted storage,
                our team will prioritize your request.
              </p>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}