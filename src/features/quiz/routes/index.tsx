import React from "react";
import { useQuizQuery } from "../hooks";
import loader from "../../../assets/svgs/loader.svg";
import { PlayQuiz } from "../components";

const index = () => {
  const quizQuery = useQuizQuery();
  return (
    <div className=" grid justify-center mt-[10%] text-center gap-2">
      {quizQuery.isSuccess ? (
        <PlayQuiz results={quizQuery.data.results}></PlayQuiz>
      ) : (
        <img src={loader} alt="Loading Quiz"></img>
      )}
    </div>
  );
};

export default index;
