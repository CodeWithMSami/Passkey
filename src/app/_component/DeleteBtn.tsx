'use client';

import { deletePassword } from "../_actions/passwords";

const DeleteBtn = ({ id }: { id: string }) => {
    return (
        <button onClick={() => deletePassword(id)}
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
            ">
            Delete Password
        </button>
    )
}

export default DeleteBtn;
