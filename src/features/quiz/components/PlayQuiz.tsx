import React from "react";
import { useNavigate } from "react-router-dom";
import { Category, Question } from ".";
import { useQuestionTracker } from "../hooks/useQuestionTracker";
import { API_RESPONSE, Quiz } from "../types";

export const PlayQuiz = ({ results }: { results: Quiz[] }) => {
  const navigate = useNavigate();
  const [curQIndex] = useQuestionTracker(results.length, {
    onFinished: () => {
      navigate("results");
    },
  });
  const curQuestion = React.useMemo(() => results[curQIndex], [curQIndex]);
  //console.log(curQuestion);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg text-left border-2 border-gray-100">
      <div className="px-6 py-4">
        <div className="mb-2">
          <h2 className="text-slate-600 font-bold text-xl">
            {curQuestion.category}
          </h2>
        </div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
        <div className="text-right">
          <span className="font-mulish font-bold  text-orange-500">1</span>
          <span className="font-mulish  font-medium ">/2</span>
        </div>
        <div className="mt-2 flex justify-center gap-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            True
          </button>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            False
          </button>
        </div>
      </div>
    </div>
  );
};

//export default PlayQuiz
