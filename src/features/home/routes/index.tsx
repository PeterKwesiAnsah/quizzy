import React from "react";
import { Link } from "react-router-dom";
const index = () => {
  return (
    <div className=" grid justify-center  mt-[50%] md:mt-[10%] text-center gap-2">
      <h1 className="font-mulish text-2xl font-medium">Welcome to this Game</h1>
      <span className="text-zinc-500">
        You will be presented with 15 true or false questions.
      </span>
      <span className="">Can you score 100%?</span>
      <div className="mt-[20%]">
        <Link to="quiz">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Begin
          </button>
        </Link>
      </div>
    </div>
  );
};

export default index;
