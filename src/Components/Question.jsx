import { Button } from '@mui/material';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import Timer from './Timer';
import {useSound} from "use-sound"
import correctSound from '../Sound/correct.mp3'
import wrongSound from '../Sound/wrongans.mp3'

const Question = ({ currques, questions, options, score, correct, SetScore, setCurrques }) => 
{
  const [select, setSelect] = useState();
  const [error, setError] = useState(false);
  const [play1] = useSound(correctSound);
  const [play2] = useSound(wrongSound);
 

  const navigate = useNavigate();
  function handleSelect(optndata) {
    if (select === optndata && select === correct) {
   
      return "select";
    }
    else if (select === optndata && select !== correct) {
      play2();         
      return "wrong";
    }
    else if (optndata === correct) {
      return "select";
    }
  };

  function handleCheck(optndata) {
    setSelect(optndata);
    if (optndata === correct) {
    play1();
      SetScore(score + 1);
      setError(false);

    }
  }

  function handleNext() {
    if (currques >= 9) {
      navigate('/result');
    }
    else {
      setCurrques(currques + 1);
      setSelect();

    }
   
  }
  return (
    <>
      <div className='flex flex-col w-screen whitespace-break-spaces sm:mt-5 mt-8 h-auto pb-2 sm:h-auto  bg-gray-300 '>
        <Timer currques={currques} setCurrques={setCurrques} setSelect={setSelect} />

        <h1 className='sm:text-3xl text-2xl mt-2 mx-auto font-bold  '>Question {currques + 1}</h1>
        {/* single ques */}
        <div className='flex flex-col'>
          <h2 className='mt-7  lg:mt-5  w-full sm:w-3/4 px-2 font-bold  text-xl  lg:mx-auto text-center' >{questions[currques].question}</h2>

          {/* option */}
          <div className='flex flex-col sm:grid sm:grid-flow-row sm:grid-cols-2   sm:gap-3 gap-2 lg:w-8/12 w-4/5 mx-auto  sm:mt-7 mt-4 lg:mt-3'>
            {error && toast("error")}
            {options && options.map((optndata) => {
              return (
                <button onClick={() => handleCheck(optndata)} className={` mx-3  text-xl  py-1 rounded-md w-auto bg-white ${select && handleSelect(optndata)}`} disabled={select} key={optndata}>{optndata}</button>
              )
            })}
          </div>
        </div>
        <div className='flex mx-auto sm:mt-7 mt-5 mb-5 gap-8'>
          <Button variant='contained' color='secondary' onClick={()=> navigate("/result")}>
            Quit
          </Button>
          <Button variant='contained' color='primary' onClick={handleNext}  >
            Next Question
          </Button>
        </div>
      </div>
     </>
  )
}

export default Question;

