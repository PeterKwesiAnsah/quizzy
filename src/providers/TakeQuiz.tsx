import React, { ReactChild } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../store";

export const TakeQuiz = ({ children }: { children: ReactChild }) => {
  const isQuizTaken =
    useSelector((state: RootState) => state.quiz.results).length > 0;
  if (isQuizTaken) {
    return <>{children}</>;
  }
  return (
    <div className="grid justify-center  mt-[10%]">
      <Link to="/">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Take Quiz
        </button>
      </Link>
    </div>
  );
};

//export default TakeQuiz
