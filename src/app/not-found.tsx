import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="text-center ">
      <Link href="/">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Back to Home
        </button>
      </Link>
      <h1 className="font-extrabold text-[1.8rem]">
        {" "}
        A <span className="font-black text-[1.9rem] underline"> 404 </span>{" "}
        problem is occuered!
      </h1>
      <h2> Please check the URL again </h2>
    </div>
  );
};

export default NotFound;
