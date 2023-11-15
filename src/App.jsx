import React, {useState } from 'react'
import Header from './Components/Header';
import Home from './Components/Home';
import Quiz from './Components/Quiz';
import Result from './Components/Result';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {


  const [name, setName] = useState();
  const [questions, SetQuestions] = useState("");
  const [score, SetScore] = useState(0);

    
  async function fetchData(category = "", difficulty = "") {

    const { data } = await axios.get(`https://opentdb.com/api.php?amount=10${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`); console.log(data);
    SetQuestions(data.results)
  };

  return (
    <>
      <BrowserRouter>
        <div className='flex flex-col justify-start items-center w-full  h-screen '>
          <Header />

          <Routes>

            <Route path='/' element={<Home name={name} setName={setName} fetchData={fetchData} />} />
            <Route path='/quiz' element={<Quiz name={name} questions={questions} score={score} SetScore={SetScore} />} />
            <Route path='/result' element={<Result score={score} name={name} />} />
          </Routes>
        </div>
        {/* <Footer/> */}
        <ToastContainer />
      </BrowserRouter>
    </>
  )

}

export default App;



