import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="grid  place-items-center mt-[5%]  auto-rows-min gap-4">
      <h1 className="text-5xl md:text-9xl font-bold">404</h1>
      <div className="flex gap-2 items-end">
        <span>Lost... ?</span>
        <Link to="/">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};
