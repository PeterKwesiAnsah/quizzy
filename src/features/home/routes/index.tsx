import React from "react";
import { Link } from "react-router-dom";
const index = () => {
  return (
    <div className=" grid justify-center mt-[10%] text-center gap-2">
      <h1 className="font-mulish text-2xl font-medium">Welcome to this Game</h1>
      <span className="text-zinc-500">
        You will be presented with 15 true or false questions.
      </span>
      <span className="text-orange-500">Can you score 100%?</span>
      <div className="mt-6">
        <Link to="quiz">
          <button
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Begin
          </button>
        </Link>
      </div>
    </div>
  );
};

export default index;
