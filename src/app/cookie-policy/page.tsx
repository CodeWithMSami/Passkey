import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Passkey",
  description: "Cookie policy for Passkey password manager.",
};

export default function CookiePolicyPage() {
  return (
    <main className="mx-auto max-w-4xl mt-20 px-6 py-16 text-primary/80">
      <h1 className="mb-6 text-4xl font-bold text-primary">
        Cookie Policy
      </h1>

      <p className="mb-8 text-gray-400">
        Last updated: August 1, 2026
      </p>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-primary">
          1. What Are Cookies?
        </h2>

        <p>
          Cookies are small text files stored on your device when you visit a
          website. They help websites provide better functionality and improve
          user experience.
        </p>

        <h2 className="text-2xl font-semibold text-primary">
          2. How We Use Cookies
        </h2>

        <p>
          Passkey uses cookies mainly for authentication, maintaining secure
          sessions, and providing essential application functionality.
        </p>

        <h2 className="text-2xl font-semibold text-primary">
          3. Types of Cookies We Use
        </h2>

        <p>
          We may use essential cookies required for login sessions and security.
          These cookies help keep your account protected and allow Passkey to
          function properly.
        </p>

        <h2 className="text-2xl font-semibold text-primary">
          4. Managing Cookies
        </h2>

        <p>
          You can control or remove cookies through your browser settings.
          However, disabling essential cookies may prevent some Passkey
          features from working correctly.
        </p>

        <h2 className="text-2xl font-semibold text-primary">
          5. Third-Party Cookies
        </h2>

        <p>
          Some third-party services used by Passkey may set cookies required
          for hosting, authentication, analytics, or application improvements.
        </p>

        <h2 className="text-2xl font-semibold text-primary">
          6. Updates to This Policy
        </h2>

        <p>
          We may update this Cookie Policy when our services or cookie usage
          changes. Any updates will be reflected on this page.
        </p>

        <h2 className="text-2xl font-semibold text-primary">
          7. Contact
        </h2>

        <p>
          If you have questions about our Cookie Policy, please contact us
          through the available contact options on Passkey.
        </p>
      </section>
    </main>
  );
}