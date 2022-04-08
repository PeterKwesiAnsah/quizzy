import { UseQueryOptions } from "react-query";

export type Quiz = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: "True" | "False";
  incorrect_answers: ("False" | "True")[];
};

export type API_RESPONSE<T> = {
  response_code: number;
  results: T[];
};

export type QueryConfig<FetcherFnType extends (...args: any) => any> =
  UseQueryOptions<Awaited<ReturnType<FetcherFnType>>>;
