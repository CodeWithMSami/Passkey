import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

import LandingImage from "@/app/_assets/landing-image.png";
import LandingImageMobile from "@/app/_assets/landing-image-mobile.png";
import PasskeyImg from "@/app/_assets/Passkey.jpg";

export const metadata: Metadata = {
  title: "Passkey — Secure Password Manager",
  description:
    "Store, organize, and manage all your passwords securely in one encrypted vault.",
  keywords: [
    "password manager",
    "password vault",
    "password storage",
    "password generator",
    "secure passwords",
  ],
  authors: [{ name: "Passkey Team" }],
  openGraph: {
    title: "Passkey — Secure Password Manager",
    description:
      "Store, organize, and manage all your passwords securely in one encrypted vault.",
    type: "website",
    images: [
      {
        url: PasskeyImg.src,
        alt: "Passkey Password Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Passkey — Secure Password Manager",
    description:
      "Store, organize, and manage all your passwords securely in one encrypted vault.",
    images: [PasskeyImg.src],
  },
};

export default function Home() {
  return (
    <main className="w-full overflow-hidden">

      {/* Hero */}
      <section className="relative">
        <Image
          src={LandingImage}
          alt="Passkey Hero"
          priority
          className="hidden md:block w-full h-auto pt-12 bg-linear-to-r from-gray-300 via-white to-gray-200"
        />

        <Image
          src={LandingImageMobile}
          alt="Passkey Mobile"
          priority
          className="block md:hidden w-full min-h-125 object-cover pt-14 bg-linear-to-r from-gray-300 via-white to-gray-200"
        />

        <div className="absolute inset-0 flex items-center">
          <div className="px-6 md:px-12 lg:px-20 max-w-2xl">

            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
              Secure Password Management
            </span>

            <h1 className="mt-4 text-4xl md:text-6xl font-bold text-primary">
              Store & Manage
              <br />
              Passwords Securely
            </h1>

            <p className="mt-6 text-lg md:text-xl text-primary/80">
              Keep all your passwords in one secure vault. Generate strong
              passwords, organize accounts, and access your credentials anytime.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/signup"
                className="px-6 py-3 bg-primary text-secondary rounded-lg"
              >
                Get Started
              </Link>

              <a
                href="#features"
                className="px-6 py-3 border border-primary text-primary rounded-lg"
              >
                Learn More
              </a>
            </div>

          </div>
        </div>
      </section>


      {/* Stats */}
      <section className="py-16 border-y">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="text-4xl font-bold text-primary">256-bit</h3>
            <p className="text-primary/70">Encryption</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-primary">∞</h3>
            <p className="text-primary/70">Passwords Stored</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-primary">1</h3>
            <p className="text-primary/70">Master Password</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-primary">24/7</h3>
            <p className="text-primary/70">Access Anywhere</p>
          </div>

        </div>
      </section>


      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary/80">
          Powerful Features
        </h2>

        <p className="text-center text-primary/70 mt-4">
          Everything you need to securely store, organize, and manage passwords.
        </p>


        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="p-8 rounded-2xl border">
            <h3 className="text-xl font-semibold mb-4 text-primary/80">
              Secure Vault
            </h3>
            <p className="text-primary/70">
              Store all your passwords safely inside an encrypted vault.
            </p>
          </div>


          <div className="p-8 rounded-2xl border">
            <h3 className="text-xl font-semibold mb-4 text-primary/80">
              Password Generator
            </h3>
            <p className="text-primary/70">
              Generate strong and unique passwords instantly.
            </p>
          </div>


          <div className="p-8 rounded-2xl border">
            <h3 className="text-xl font-semibold mb-4 text-primary/80">
              Easy Organization
            </h3>
            <p className="text-primary/70">
              Organize credentials and quickly find accounts.
            </p>
          </div>

        </div>

      </section>
            {/* How It Works */}
      <section className="py-20 bg-primary/50">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-14">

            <div className="text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-primary text-secondary flex items-center justify-center font-bold text-lg">
                1
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                Create Your Vault
              </h3>

              <p className="mt-3 text-secondary/70">
                Create your account and set a secure master password.
              </p>
            </div>


            <div className="text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-primary text-secondary flex items-center justify-center font-bold text-lg">
                2
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                Save Passwords
              </h3>

              <p className="mt-3 text-secondary/70">
                Store your website credentials safely inside your encrypted vault.
              </p>
            </div>


            <div className="text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-primary text-secondary flex items-center justify-center font-bold text-lg">
                3
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                Access Anytime
              </h3>

              <p className="mt-3 text-secondary/70">
                View and manage your passwords whenever you need them.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* Security */}
      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>

            <h2 className="text-3xl md:text-4xl font-bold text-primary/80">
              Your Passwords Stay Protected
            </h2>

            <p className="mt-6 text-primary/70">
              Passkey uses strong encryption to keep your stored credentials
              private and secure. Only you can access your password vault.
            </p>


            <ul className="mt-8 space-y-4 text-primary/80">
              <li>
                ✓ Encrypted password storage
              </li>

              <li>
                ✓ Secure master password protection
              </li>

              <li>
                ✓ Strong password generation
              </li>

              <li>
                ✓ Private credential management
              </li>
            </ul>

          </div>


          <div className="p-10 rounded-3xl border bg-primary/50">

            <h3 className="text-2xl font-semibold">
              Built For Everyday Security
            </h3>

            <p className="mt-4 text-secondary/70">
              Whether you have a few passwords or thousands of accounts,
              Passkey keeps everything organized, encrypted, and easy to access.
            </p>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="py-24">

        <div className="max-w-5xl mx-auto px-6">

          <div className="rounded-3xl bg-primary text-secondary text-center p-12 md:p-16">

            <h2 className="text-4xl md:text-5xl font-bold">
              Start Managing Passwords Securely
            </h2>

            <p className="mt-4 opacity-80 max-w-2xl mx-auto">
              Keep your passwords organized, protected, and available whenever
              you need them.
            </p>


            <Link
              href="/signup"
              className="inline-block mt-8 px-8 py-4 rounded-xl bg-secondary text-primary font-semibold"
            >
              Create Your Vault
            </Link>

          </div>

        </div>

      </section>


    </main>
  );
}