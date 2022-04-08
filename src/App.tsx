import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router } from "react-router-dom";
import { client } from "./lib";
import AppRoutes from "./routes";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <Router>
          <AppRoutes></AppRoutes>
        </Router>
      </Provider>

      <ReactQueryDevtools></ReactQueryDevtools>
    </QueryClientProvider>
  );
}

export default App;
