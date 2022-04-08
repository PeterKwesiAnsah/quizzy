import React from "react";

type useQuestionTrackerOptions = {
  onFinished?: () => void;
};
export const useQuestionTracker = (
  quizLength: number,
  options?: useQuestionTrackerOptions
) => {
  const [curQuestion, setCurQuestion] = React.useState(0);

  const changeCurQuestion = React.useCallback(() => {
    const next = curQuestion + 1;
    if (next === quizLength) {
      options && options?.onFinished && options?.onFinished();
      return;
    }
    setCurQuestion(next);
  }, [curQuestion]);
  return [curQuestion, changeCurQuestion] as const;
};
