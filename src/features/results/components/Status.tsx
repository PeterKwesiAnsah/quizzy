import React from "react";
import correct from "../../../assets/svgs/correct.svg";
import incorrect from "../../../assets/svgs/incorrect.svg";

export const Status = ({
  questionNum,
  choice,
}: {
  questionNum: number;
  choice: boolean;
}) => {
  return (
    <li className="list-none flex gap-2 gap-y-3 my-0 mx-auto">
      <img
        src={choice ? correct : incorrect}
        alt={choice ? "correct" : "incorrect"}
      ></img>
      <span className="text-zinc-500">Question {questionNum}</span>
    </li>
  );
};

//export default Status
