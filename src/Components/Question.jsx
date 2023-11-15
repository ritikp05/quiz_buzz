import { Button } from '@mui/material';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import Timer from './Timer';

const Question = ({ currques, questions, options, score, correct, SetScore, setCurrques }) => 
{
  const [select, setSelect] = useState();
  const [error, setError] = useState(false);

  const [timer, setTimer] = useState(10);


  const navigate = useNavigate();
  function handleSelect(optndata) {
    if (select === optndata && select === correct) {
      return "select";
    }
    else if (select === optndata && select !== correct) {
      return "wrong";
    }

    else if (optndata === correct) {
      return "select";
    }
  };

  function handleCheck(optndata) {
    setSelect(optndata);
    if (optndata === correct) {
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

      <div className='flex flex-col w-screen whitespace-normal lg:mt-2 mt-12 h-full pb-4 lg:h-full lg:w-screen bg-gray-300 '>
        <Timer currques={currques} setCurrques={setCurrques} setSelect={setSelect} />

        <h1 className='text-3xl mt-3 mx-auto font-bold '>Question {currques + 1}</h1>
        {/* single ques */}
        <div className='flex flex-col'>
          <h2 className='mt-7 lg:mt-5  w-full px-2 font-bold text-2xl lg:text-xl lg:mx-auto  whitespace-no ' >{questions[currques].question}</h2>

          {/* option */}
          <div className='flex flex-col gap-3 lg:w-96 w-full mx-auto  mt-7 lg:mt-3'>
            {error && toast("error")}
            {options && options.map((optndata) => {
              return (
                <button onClick={() => handleCheck(optndata)} className={` mx-3  text-xl  py-1 rounded-md w-auto bg-white ${select && handleSelect(optndata)}`} disabled={select} key={optndata}>{optndata}</button>
              )
            })}
          </div>
        </div>
        <div className='flex mx-auto mt-7 mb-5 gap-8'>
          <Button variant='contained' color='secondary' onClick={() => navigate("/result")}>
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

