import CancelButton from "@/app/_component/CancelSubmit";
import XSubmit from "@/app/_component/XSubmit";


const passwords = [
  {
    id: "1",
    name: "Google Account",
  },
];



export default async function DeletePasswordModal({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {


  const { id } = await params;


  const password = passwords.find(
    (item) => item.id === id
  );



  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">


      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-8">



        {/* Header */}
        <div className="flex justify-between items-start">


          <div>

            <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-sm">
              Danger Zone
            </span>


            <h2 className="mt-4 text-3xl font-bold text-primary">
              Delete Password
            </h2>


          </div>


          <XSubmit />


        </div>





        {/* Content */}
        <div className="mt-6">


          <p className="text-primary/70">
            Are you sure you want to delete this password?
          </p>



          <div className="mt-5 rounded-2xl bg-primary/5 p-5">


            <h3 className="font-bold text-primary text-lg">
              {password?.name ?? "Unknown Account"}
            </h3>


            <p className="text-sm text-primary/60 mt-1">
              This action cannot be undone.
            </p>


          </div>


        </div>








        {/* Warning */}
        <div className="mt-5 rounded-2xl bg-red-500/10 p-4">


          <p className="text-sm text-red-600">
            ⚠️ Removing this password will permanently delete your saved credentials.
          </p>


        </div>








        {/* Actions */}
        <div className="flex gap-3 mt-8">


          <CancelButton />



          <button
            type="button"
            className="
              flex-1
              py-3
              rounded-xl
              bg-red-500
              text-white
              font-semibold
              border-4
              border-red-500
              hover:bg-white
              hover:text-red-500
              cursor-pointer
              transition-all
              duration-300
            "
          >
            Delete Password
          </button>


        </div>


      </div>


    </div>
  );
}