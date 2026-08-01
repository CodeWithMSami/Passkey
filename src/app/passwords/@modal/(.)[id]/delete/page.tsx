import { getPassword } from "@/app/_actions/passwords";
import CancelButton from "@/app/_component/CancelSubmit";
import DeleteBtn from "@/app/_component/DeleteBtn";
import XSubmit from "@/app/_component/XSubmit";

export default async function DeletePasswordModal({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {


  const { id } = await params;


  const password = await getPassword(id);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">


      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-8">



        {/* Header */}
        <div className="flex justify-between items-start">


          <div>

            <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-sm">
              Danger Zone
            </span>

            <br />

            <button className="mt-4 text-3xl font-bold text-primary">
              Delete Password
            </button>


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



          <DeleteBtn  id={password?.id} />


        </div>


      </div>


    </div>
  );
}