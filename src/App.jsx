import React, { useState } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Quiz from "./Components/Quiz";
import Result from "./Components/Result";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import Errorpage from "./Components/Errorpage";
import Feedback from "./Components/Feedback";

const App = () => {
  const [name, setName] = useState("");
  const [questions, SetQuestions] = useState("");
  const [score, SetScore] = useState(0);
  const [loading, Setloading] = useState(true);
  const [category, setCat] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [popup, Setpopup] = useState(true);
  async function fetchData(category = "", difficulty = "") {
    try {
      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=10${
          category && `&category=${category}`
        }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
      );
      console.log(data);
      SetQuestions(data.results);
      Setloading(false);
    } catch (error) {
      Seterror(true);
      console.log(error);
    }
  }

  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col justify-start items-center w-full  h-screen ">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  name={name}
                  popup={popup}
                  Setpopup={Setpopup}
                  difficulty={difficulty}
                  setDifficulty={setDifficulty}
                  category={category}
                  setCat={setCat}
                  setName={setName}
                  fetchData={fetchData}
                 />
              }
            />
            <Route
              path="/quiz"
              element={
                <Quiz
                  name={name}
                  questions={questions}
                  score={score}
                  SetScore={SetScore}
                  loading={loading}
                  setDifficulty={setDifficulty}
                  setName={setName}
                  Setloading={Setloading}
                />
              }
            />
            <Route
              path="/result"
              element={
                <Result
                  score={score}
                  setName={setName}
                  name={name}
                  setDifficulty={setDifficulty}
                  setCat={setCat}
                  SetScore={SetScore}
                />
              }
            />
            <Route path="/feedback" element={<Feedback/>} />

            <Route path="*" element={<Errorpage/>} />
          </Routes>
        </div>
        <ToastContainer/>
      </BrowserRouter>
    </>
  );
};

export default App;
