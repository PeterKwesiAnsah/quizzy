import { Routes, Route } from "react-router-dom";
import Home from "../features/home/routes";
import Quiz from "../features/quiz/routes";
import Results from "../features/results/routes";
import { NotFound } from "../components";
const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="quiz" element={<Quiz></Quiz>}></Route>
      <Route path="results" element={<Results></Results>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  );
};
export default Index;
