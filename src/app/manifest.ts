import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Passkey — Secure Password Manager",

    short_name: "Passkey",

    description:
      "Store, organize, and manage all your passwords securely in one encrypted vault.",

    start_url: "/",

    display: "standalone",

    orientation: "portrait",

    theme_color: "#10ff04",

    background_color: "#ffffff",

    lang: "en",

    categories: [
      "security",
      "productivity",
      "utilities",
    ],

    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}