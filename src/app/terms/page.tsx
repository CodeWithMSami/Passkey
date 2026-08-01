import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Passkey",
  description: "Terms of use for Passkey password manager.",
};

export default function TermsOfUsePage() {
  return (
    <main className="mx-auto max-w-4xl mt-20 px-6 py-16 text-primary/80">
      <h1 className="mb-6 text-4xl font-bold text-primary">
        Terms of Use
      </h1>

      <p className="mb-8 text-gray-400">
        Last updated: August 1, 2026
      </p>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-primary">
          1. Acceptance of Terms
        </h2>

        <p>
          By accessing or using Passkey, you agree to these Terms of Use. If you
          do not agree with these terms, please stop using the application.
        </p>

        <h2 className="text-2xl font-semibold text-primary">
          2. Account Responsibility
        </h2>

        <p>
          You are responsible for keeping your account credentials secure and
          preventing unauthorized access to your account.
        </p>

        <p>
          You should use a strong master password and keep your recovery
          information safe.
        </p>

        <h2 className="text-2xl font-semibold text-primary">
          3. Use of Passkey
        </h2>

        <p>
          Passkey provides tools to help you securely store and manage your
          passwords. You agree to use the service only for lawful purposes.
        </p>

        <h2 className="text-2xl font-semibold text-primary">
          4. Prohibited Activities
        </h2>

        <p>
          You may not attempt unauthorized access, interfere with the service,
          abuse security features, or use Passkey for illegal activities.
        </p>

        <h2 className="text-2xl font-semibold text-primary">
          5. Service Availability
        </h2>

        <p>
          We may update, modify, or temporarily disable parts of Passkey to
          improve security, performance, or functionality.
        </p>

        <h2 className="text-2xl font-semibold text-primary">
          6. Limitation of Liability
        </h2>

        <p>
          Passkey is provided as a password management tool. Users are
          responsible for maintaining their own account security and protecting
          their login information.
        </p>

        <h2 className="text-2xl font-semibold text-primary">
          7. Changes to Terms
        </h2>

        <p>
          We may update these Terms of Use from time to time. Continued use of
          Passkey after changes means you accept the updated terms.
        </p>

        <h2 className="text-2xl font-semibold text-primary">
          8. Contact
        </h2>

        <p>
          If you have questions regarding these Terms of Use, please contact us
          through the available contact options on Passkey.
        </p>
      </section>
    </main>
  );
}