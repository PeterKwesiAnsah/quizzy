import React from "react";
import correct from "../../../assets/svgs/correct.svg";
import incorrect from "../../../assets/svgs/incorrect.svg";
import { Question } from "../../quiz/slice";

export const Status = (props: Question) => {
  return (
    <li className="list-none flex gap-2 gap-y-3 my-0 mx-auto">
      <span>{props.num + ")."}</span>
      <img
        src={props.correct ? correct : incorrect}
        alt={props.correct ? "correct" : "incorrect"}
      ></img>
      <span className="text-zinc-500">{props.choice}</span>
    </li>
  );
};

//export default Status
