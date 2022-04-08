import React from "react";
import { fetchAsync } from "../../../lib";
import { API_RESPONSE, Quiz } from "../types";

export const QUIZZES_LENGTH = 15;
export const getQuiz: () => Promise<API_RESPONSE<Quiz>> = () => {
  return fetchAsync({
    method: "GET",
    path: `/?amount=${QUIZZES_LENGTH}&difficulty=hard&type=boolean`,
  });
};
