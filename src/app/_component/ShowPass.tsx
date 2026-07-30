"use client";

import { useState } from "react";

interface ShowPassProps {
  encrypted_password: string;
}

const ShowPass = ({
  encrypted_password,
}: ShowPassProps) => {

  const [show, setShow] = useState(false);


  return (
    <div className="flex items-center gap-3 mt-2">

      <span className="font-medium text-primary">
        {show ? encrypted_password : "••••••••••"}
      </span>


      <button
        type="button"
        onClick={() => setShow(!show)}
        className="text-sm text-primary font-semibold hover:underline cursor-pointer"
      >
        {show ? "Hide" : "Show"}
      </button>

    </div>
  );
};


export default ShowPass;