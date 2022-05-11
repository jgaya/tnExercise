import React from "react"
import { Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./components/layout/layout";
import Spinner from "./components/Spinner/Spinner";

const Home = React.lazy(() => import("./pages/Tasks"));
const About = React.lazy(() => import("./pages/About"));

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<Spinner />}>
        <Routes>
          <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </React.Suspense>

    </div>
  );
}

export default App;
