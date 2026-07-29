import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import PasskeyImg from "@/app/_assets/Passkey.jpg";
import "./globals.css";
import Navbar from "@/app/_component/Navbar";
import Footer from "@/app/_component/Footer";
import { Toaster } from "sonner";
import AuthToastWrapper from "./_component/AuthToastWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://passkey-codewithmsami.netlify.app'),
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
  icons: {
    icon: PasskeyImg.src,
    shortcut: PasskeyImg.src,
    apple: PasskeyImg.src,
  },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <AuthToastWrapper />
        <Toaster position="top-right" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
