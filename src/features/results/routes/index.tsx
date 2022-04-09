import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { Tracker } from "../../quiz/components";
import { Status } from "../components";

const index = () => {
  const choices = useSelector((state: RootState) => state.quiz.results);
  const correctChoices = choices.filter(({ correct }) => correct).length;
  const choicesLength = choices.length;
  return (
    <div className="grid justify-center mt-[2.5%] text-center  gap-2">
      <span className="font-mulish text-2xl font-medium">You scored</span>
      <div className="flex items-baseline">
        <h1 className="font-bold text-7xl text-blue-700">
          {Math.round((correctChoices / choicesLength) * 100) + "%"}
        </h1>
        <span className="font-bold text-1xl">
          {`(${correctChoices + "/" + choicesLength})`}
        </span>
      </div>

      <ul className="flex flex-col gap-y-2 mt-2 text-center">
        {choices.map((choice, index) => (
          <Status
            questionNum={choice.num}
            choice={choice.correct}
            key={index}
          ></Status>
        ))}
      </ul>
    </div>
  );
};

export default index;
