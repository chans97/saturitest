import "./App.css";
import Home from "./Home";
import Explain from "./Explain";
import Question from "./Question";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [name, setName] = useState("");
  const [stage, setStage] = useState(1);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/explain"
            element={<Explain name={name} setName={setName} />}
          />
          <Route
            exact
            path="/question"
            element={<Question stage={stage} setStage={setStage} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
