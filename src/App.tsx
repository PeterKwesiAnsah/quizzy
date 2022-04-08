import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router } from "react-router-dom";
import { client } from "./lib";
import AppRoutes from "./routes";

function App() {
  return (
    <QueryClientProvider client={client}>
      <Router>
        <AppRoutes></AppRoutes>
      </Router>
      <ReactQueryDevtools></ReactQueryDevtools>
    </QueryClientProvider>
  );
}

export default App;
