import React from "react";
import { useQuizQuery } from "../hooks";
import loader from "../../../assets/svgs/loader.svg";
import { PlayQuiz } from "../components";
import toaster from "react-hot-toast";

const index = () => {
  const quizQuery = useQuizQuery({
    onError: () => {
      toaster.error("Something Bad Happened", {
        position: "bottom-center",
      });
    },
  });
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
