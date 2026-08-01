import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Passkey",
  description: "Privacy policy for Passkey password manager.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl mt-20 px-6 py-16 text-primary/80">
      <h1 className="mb-6 text-4xl font-bold text-primary">
        Privacy Policy
      </h1>

      <p className="mb-8 text-gray-400">
        Last updated: August 1, 2026
      </p>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-primary">
          1. Introduction
        </h2>

        <p>
          Passkey is a secure password management application designed to help
          users store and organize their passwords. Your privacy and security
          are important to us.
        </p>

        <h2 className="text-2xl font-semibold text-primary">
          2. Information We Collect
        </h2>

        <p>
          We may collect account information such as your email address,
          authentication details, and encrypted password records that you
          choose to store.
        </p>

        <p>
          Your stored passwords are encrypted and are not intended to be
          readable by anyone except you.
        </p>

        <h2 className="text-2xl font-semibold text-primary">
          3. How We Use Your Information
        </h2>

        <p>
          Information is used to provide authentication, maintain your account,
          improve application functionality, and protect against unauthorized
          access.
        </p>

        <h2 className="text-2xl font-semibold text-primary">
          4. Data Security
        </h2>

        <p>
          We use security practices including encrypted storage, secure
          authentication, and access controls to protect your information.
        </p>

        <h2 className="text-2xl font-semibold text-primary">
          5. Third-Party Services
        </h2>

        <p>
          Passkey may use third-party services for hosting, authentication,
          analytics, or infrastructure. These services may process limited
          information required to operate the application.
        </p>

        <h2 className="text-2xl font-semibold text-primary">
          6. Your Rights
        </h2>

        <p>
          You may request access, modification, or deletion of your account
          data where applicable.
        </p>

        <h2 className="text-2xl font-semibold text-primary">
          7. Contact
        </h2>

        <p>
          If you have questions regarding this Privacy Policy, please contact
          us through the available contact options on Passkey.
        </p>
      </section>
    </main>
  );
}