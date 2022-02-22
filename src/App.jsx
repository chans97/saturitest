import Home from "./Home";
import Explain from "./Explain";
import Question from "./Question";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Question4 from "./Question4";
import Question5 from "./Question5";
import Ending from "./Ending";
import Gameover from "./Gameover";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [name, setName] = useState("");
  const [stage, setStage] = useState(1);
  const RESTURL = "http://summerluna.pythonanywhere.com/";
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home url={RESTURL} />} />
          <Route
            exact
            path="/explain"
            element={<Explain name={name} setName={setName} />}
          />
          <Route
            exact
            path="/question"
            element={
              <Question
                url={RESTURL}
                name={name}
                stage={stage}
                setStage={setStage}
              />
            }
          />
          <Route
            exact
            path="/question2"
            element={
              <Question2
                url={RESTURL}
                name={name}
                stage={stage}
                setStage={setStage}
              />
            }
          />
          <Route
            exact
            path="/question3"
            element={
              <Question3
                url={RESTURL}
                name={name}
                stage={stage}
                setStage={setStage}
              />
            }
          />
          <Route
            exact
            path="/question4"
            element={
              <Question4
                url={RESTURL}
                name={name}
                stage={stage}
                setStage={setStage}
              />
            }
          />
          <Route
            exact
            path="/question5"
            element={
              <Question5
                url={RESTURL}
                name={name}
                stage={stage}
                setStage={setStage}
              />
            }
          />
          <Route
            exact
            path="/ending"
            element={<Ending url={RESTURL} name={name} stage={stage} />}
          />
          <Route
            exact
            path="/gameover"
            element={<Gameover url={RESTURL} name={name} stage={stage} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
