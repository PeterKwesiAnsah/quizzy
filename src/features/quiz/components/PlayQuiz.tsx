import React from "react";
import { useNavigate } from "react-router-dom";
import { Category, Question, Tracker } from ".";
import { useQuestionTracker } from "../hooks/useQuestionTracker";
import { Quiz } from "../types";
import { useDispatch } from "react-redux";
import { answer, reset } from "../slice";

export const PlayQuiz = ({ results }: { results: Quiz[] }) => {
  const navigate = useNavigate();
  const [curQIndex, handleNextQ] = useQuestionTracker(results.length, {
    onFinished: () => {
      navigate("/results");
    },
  });
  const dispatch = useDispatch();
  const curQuestion = React.useMemo(() => results[curQIndex], [curQIndex]);
  const handleChoice: React.MouseEventHandler<HTMLButtonElement> =
    React.useCallback(
      (e) => {
        const target = e.target as HTMLButtonElement;
        const choice = target.name as "True" | "False";
        dispatch(
          answer({
            num: curQIndex + 1,
            choice,
            correct: choice === curQuestion.correct_answer,
          })
        );
        handleNextQ();
      },
      [curQIndex, curQuestion]
    );
  React.useEffect(() => {
    dispatch(reset());
  }, []);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg text-left border-2 border-gray-100">
      <div className="px-6 py-4">
        <Category category={curQuestion.category}></Category>
        <Question question={curQuestion.question}></Question>
        <Tracker current={curQIndex} total={results.length}></Tracker>
        <div className="mt-2 flex justify-center gap-2">
          <button
            type="button"
            onClick={handleChoice}
            name="True"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            True
          </button>
          <button
            onClick={handleChoice}
            type="button"
            name="False"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            False
          </button>
        </div>
      </div>
    </div>
  );
};

//export default PlayQuiz
