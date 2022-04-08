import { useQuery } from "react-query";
import { getQuiz } from "../api";
import { QueryConfig } from "../types";

export const useQuizQuery = (config?: QueryConfig<typeof getQuiz>) => {
  return useQuery({
    queryKey: "quiz",
    queryFn: getQuiz,
    ...config,
  });
};
