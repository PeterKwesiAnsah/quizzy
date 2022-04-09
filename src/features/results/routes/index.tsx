import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { Tracker } from "../../quiz/components";
import { Status } from "../components";

const index = () => {
  const quiz = useSelector((state: RootState) => state.quiz.results);
  const correctChoices = quiz.filter(({ correct }) => correct).length;
  const choicesLength = quiz.length;
  return (
    <div className="grid justify-center mt-[2.5%] text-center  gap-2">
      <span className="font-mulish text-2xl font-medium">You scored</span>
      <div className="flex items-baseline my-0 mx-auto gap-1">
        <h1 className="font-bold text-7xl text-blue-700">
          {Math.round((correctChoices / choicesLength) * 100) + "%"}
        </h1>
        <span className="font-bold text-1xl">
          {`(${correctChoices + "/" + choicesLength})`}
        </span>
      </div>
      <ol className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-8">
        {quiz.map((question, index) => (
          <Status {...question} key={index}></Status>
        ))}
      </ol>
    </div>
  );
};

export default index;
