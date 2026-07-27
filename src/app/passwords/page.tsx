import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Password Vault — Passkey",
  description:
    "Securely manage and organize your passwords with Passkey.",
};


const passwords = [
  {
    id: 1,
    name: "Google Account",
    username: "sami@gmail.com",
    password: "Google@12345",
    tags: ["Work", "Email"],
    updated: "2 days ago",
    category: "Personal",
  },
  {
    id: 2,
    name: "GitHub",
    username: "codewithmsami",
    password: "Github@98765",
    tags: ["Development", "Code"],
    updated: "5 days ago",
    category: "Developer",
  },
  {
    id: 3,
    name: "Netflix",
    username: "user@example.com",
    password: "Netflix@123",
    tags: ["Entertainment"],
    updated: "1 week ago",
    category: "Entertainment",
  },
];


export default function PasswordPage() {
  return (
    <main className="py-32">

      <section className="max-w-7xl mx-auto px-6">


        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-10">

          <div>
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
              Secure Vault
            </span>

            <h1 className="mt-4 text-4xl font-bold text-primary">
              Password Manager
            </h1>

            <p className="mt-2 text-primary/70">
              Store, organize and protect your digital credentials.
            </p>
          </div>


          <Link
            href={"passwords/add"}
            className="h-fit px-6 py-3 rounded-xl bg-primary text-secondary font-semibold hover:opacity-90 transition"
          >
            + Add Password
          </Link>

        </div>




        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-5 mb-10">


          <div className="border rounded-2xl p-5">
            <p className="text-primary/60">
              Total Passwords
            </p>

            <h2 className="text-3xl font-bold text-primary mt-2">
              24
            </h2>
          </div>



          <div className="border rounded-2xl p-5">
            <p className="text-primary/60">
              Categories
            </p>

            <h2 className="text-3xl font-bold text-primary mt-2">
              8
            </h2>
          </div>



          <div className="border rounded-2xl p-5">
            <p className="text-primary/60">
              Security Score
            </p>

            <h2 className="text-3xl font-bold text-primary mt-2">
              99.99%
            </h2>
          </div>


        </div>





        {/* Search */}
        <div className="mb-6">

          <input
            type="text"
            placeholder="Search saved passwords..."
            className="w-full border rounded-2xl px-5 py-4 outline-none border-primary/30 focus:ring-2 focus:ring-primary/20"
          />

        </div>





        {/* Password List */}
        <div className="border rounded-3xl overflow-hidden">


          <div className="hidden lg:grid grid-cols-12 px-6 py-4 bg-primary/5 text-primary/70 text-sm font-semibold">

            <div className="col-span-4">
              Account
            </div>

            <div className="col-span-3">
              Password
            </div>

            <div className="col-span-2">
              Tags
            </div>

            <div className="col-span-3 text-right">
              Actions
            </div>

          </div>



          {passwords.map((item) => (

            <div
              key={item.id}
              className="grid lg:grid-cols-12 gap-5 items-center px-6 py-6 border-t hover:bg-primary/5 transition"
            >



              {/* Account */}
              <div className="lg:col-span-4">

                <h3 className="font-bold text-primary text-lg">
                  {item.name}
                </h3>

                <p className="text-primary/60 text-sm mt-1">
                  {item.username}
                </p>


                <span className="inline-block mt-3 text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                  {item.category}
                </span>

              </div>





              {/* Password */}
              <div className="lg:col-span-3">

                <p className="text-xs text-primary/50">
                  Password
                </p>


                <div className="flex items-center gap-3 mt-2">

                  <span className="font-medium text-primary">
                    ••••••••••
                  </span>


                  <button className="text-sm text-primary font-semibold">
                    Show
                  </button>

                </div>


              </div>





              {/* Tags */}
              <div className="lg:col-span-2 flex flex-wrap gap-2">

                {item.tags.map((tag) => (

                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>

                ))}

              </div>






              {/* Actions */}
              <div className="lg:col-span-3 flex lg:justify-end gap-2">


                <Link
                  href={`/passwords/${item.id}/edit`}
                  className="px-4 py-2 rounded-xl border text-primary hover:bg-primary hover:text-secondary transition"
                >
                  Edit
                </Link>

                <Link
                  href={`/passwords/${item.id}/delete`}
                  className="px-4 py-2 rounded-xl border border-red-500 text-red-500"
                >
                  Delete
                </Link>


              </div>


            </div>

          ))}


        </div>





        {/* Security Card */}
        <div className="mt-10 rounded-3xl bg-primary text-secondary p-10">

          <h2 className="text-3xl font-bold">
            Your Passwords Stay Protected
          </h2>


          <p className="mt-3 opacity-80 max-w-2xl">
            Passkey keeps your credentials organized with encryption,
            secure storage, and privacy-focused password management.
          </p>


        </div>


      </section>

    </main>
  );
}