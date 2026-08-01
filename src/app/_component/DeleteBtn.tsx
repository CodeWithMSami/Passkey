"use client";

import { deletePassword } from "../_actions/passwords";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


const DeleteBtn = ({ 
  id 
}: { 
  id?: string 
}) => {


  const router = useRouter();



  async function handleDelete() {


    if (!id) {

      toast.error("Password id not found", {
        duration: 3000,
      });

      router.back();

      return;

    }



    try {


      const result = await deletePassword(id);



      if (result.success) {


        toast.success(result.message, {
          duration: 3000,
        });


        router.back();



      } else {


        toast.error(result.message, {
          duration: 3000,
        });


      }



    } catch (error) {


      toast.error("Something went wrong while deleting password", {
        duration: 3000,
      });


    }


  }




  return (
    <button
      onClick={handleDelete}
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
  );
};


export default DeleteBtn;