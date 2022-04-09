import { Routes, Route } from "react-router-dom";
import Home from "../features/home/routes";
import Quiz from "../features/quiz/routes";
import Results from "../features/results/routes";
import { NotFound } from "../components";
import { TakeQuiz } from "../providers";
const Index = () => {
  //TODO:reset store
  //TODO: wrap a provider  around results ...show results onñly when there's one

  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="quiz" element={<Quiz></Quiz>}></Route>
      <Route
        path="results"
        element={
          <TakeQuiz>
            <Results></Results>
          </TakeQuiz>
        }
      ></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  );
};
export default Index;
