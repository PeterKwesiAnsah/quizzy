import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router } from "react-router-dom";
import { client } from "./lib";
import AppRoutes from "./routes";
import { Provider } from "react-redux";
import store from "./store";
import { Toaster } from "react-hot-toast";
import { ErrorBoundary } from "react-error-boundary";
import { FallBack } from "./components";

function App() {
  return (
    <ErrorBoundary
      onReset={() => {
        window.location.reload();
      }}
      FallbackComponent={FallBack}
    >
      <QueryClientProvider client={client}>
        <Provider store={store}>
          <Router>
            <AppRoutes></AppRoutes>
          </Router>
        </Provider>
        <Toaster></Toaster>
        <ReactQueryDevtools></ReactQueryDevtools>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
