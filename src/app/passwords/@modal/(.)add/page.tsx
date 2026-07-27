import CancelButton from "@/app/_component/CancelSubmit";
import XSubmit from "@/app/_component/XSubmit";
import Link from "next/link";


export default function AddPasswordModal() {

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-end md:items-center justify-center z-50 p-4">


      <div className="bg-white w-full max-w-xl max-h-[90vh] rounded-3xl shadow-xl overflow-hidden flex flex-col">


        {/* Header */}
        <div className="p-6 md:p-8 border-b shrink-0">


          <div className="flex justify-between items-start">


            <div>

              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                Secure Vault
              </span>


              <h2 className="mt-4 text-2xl md:text-3xl font-bold text-primary">
                Add Password
              </h2>


              <p className="mt-2 text-sm md:text-base text-primary/70">
                Save your credentials securely inside your password vault.
              </p>

            </div>


            <XSubmit />


          </div>


        </div>





        {/* Scrollable Form */}
        <div className="overflow-y-auto">


          <form className="p-6 md:p-8 space-y-5">


            {/* Account */}
            <div>

              <label className="block text-sm font-semibold text-primary mb-2">
                Account Name
              </label>


              <input
                placeholder="Google, GitHub, Netflix..."
                className="w-full border rounded-xl px-4 py-3 outline-none border-primary/30 focus:ring-2 focus:ring-primary/20"
              />

            </div>







            {/* Login Details */}
            <div className="grid md:grid-cols-2 gap-4">


              <div>

                <label className="block text-sm font-semibold text-primary mb-2">
                  Username
                </label>


                <input
                  placeholder="Email or username"
                  className="w-full border rounded-xl px-4 py-3 outline-none border-primary/30 focus:ring-2 focus:ring-primary/20"
                />

              </div>




              <div>

                <label className="block text-sm font-semibold text-primary mb-2">
                  Website
                </label>


                <input
                  placeholder="https://example.com"
                  className="w-full border rounded-xl px-4 py-3 outline-none border-primary/30 focus:ring-2 focus:ring-primary/20"
                />

              </div>


            </div>








            {/* Password */}
            <div>


              <label className="block text-sm font-semibold text-primary mb-2">
                Password
              </label>


              <div className="flex gap-3">


                <input
                  type="password"
                  placeholder="Enter secure password"
                  className="flex-1 border rounded-xl px-4 py-3 outline-none border-primary/30 focus:ring-2 focus:ring-primary/20"
                />



                <button
                  type="button"
                  className="px-4 rounded-xl border border-primary text-primary hover:bg-primary hover:text-secondary transition"
                >
                  Generate
                </button>


              </div>


            </div>









            {/* Category */}
            <div>


              <label className="block text-sm font-semibold text-primary mb-2">
                Category
              </label>


              <select
                className="w-full border rounded-xl px-4 py-3 outline-none border-primary/30 focus:ring-2 focus:ring-primary/20"
              >

                <option>
                  Personal
                </option>

                <option>
                  Work
                </option>

                <option>
                  Development
                </option>

                <option>
                  Finance
                </option>

                <option>
                  Social
                </option>

              </select>


            </div>









            {/* Tags */}
            <div>


              <label className="block text-sm font-semibold text-primary mb-2">
                Tags
              </label>


              <input
                placeholder="Work, Email, Important"
                className="w-full border rounded-xl px-4 py-3 outline-none border-primary/30 focus:ring-2 focus:ring-primary/20"
              />


              <p className="text-xs text-primary/60 mt-2">
                Separate tags using commas
              </p>


            </div>









            {/* Notes */}
            <div>


              <label className="block text-sm font-semibold text-primary mb-2">
                Notes
              </label>


              <textarea
                rows={4}
                placeholder="Add additional information..."
                className="w-full border rounded-xl px-4 py-3 outline-none border-primary/30 resize-none focus:ring-2 focus:ring-primary/20"
              />


            </div>









            {/* Security */}
            <div className="rounded-2xl bg-primary/5 p-4">


              <p className="text-sm text-primary">
                🔒 Your password will be encrypted before storage.
              </p>


            </div>









            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-3">


              <CancelButton />




              <button
                type="submit"
                className="flex-1 py-3 rounded-xl bg-primary border-4 border-primary text-secondary font-semibold hover:bg-secondary cursor-pointer hover:text-primary/95 transition-all duration-300"
              >
                Save Password
              </button>


            </div>


          </form>


        </div>


      </div>


    </div>
  );
}