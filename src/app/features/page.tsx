import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features & FAQ's — Passkey",
  description:
    "Features and FAQ's with the Passkey for support or questions",
};

const Contact = () => {
  return (
      <main className="pb-20 pt-40 border-t">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary">
            Frequently Asked Questions
          </h2>

          <div className="mt-12 space-y-6">

            <div className="border rounded-2xl p-6">
              <h3 className="font-semibold text-lg text-primary">
                How secure is Passkey?
              </h3>

              <p className="mt-2 text-primary/70">
                Passkey uses strong encryption standards to protect
                your stored credentials and personal information.
              </p>
            </div>

            <div className="border rounded-2xl p-6">
              <h3 className="font-semibold text-lg text-primary">
                Can I recover my passwords?
              </h3>

              <p className="mt-2 text-primary/70">
                Password recovery depends on your security settings
                and account recovery options.
              </p>
            </div>

            <div className="border rounded-2xl p-6">
              <h3 className="font-semibold text-lg text-primary">
                How quickly will I get a response?
              </h3>

              <p className="mt-2 text-primary/70">
                Most inquiries receive a response within one business day.
              </p>
            </div>

          </div>

        </div>
      </main>
  )
}

export default Contact;
