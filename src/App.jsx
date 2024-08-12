import { lazy, Suspense } from "react";
import "./App.css";
import Loading from "./components/Loading/Loading";

const HomePage = lazy(() => import("./pages/Home/HomePage"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <HomePage />
    </Suspense>
  );
}

export default App;
