import React, { useEffect, useState } from 'react'
import Question from './Question';
import CircularProgress from '@mui/material/CircularProgress';
const Quiz = ({ name, score, questions, SetScore, SetQuestions }) => {
  const [options, setOptions] = useState();
  const [currques, setCurrques] = useState(0);
  useEffect(() => {
    console.log(questions);
    setOptions(questions && reverseOptions([questions[currques]?.correct_answer, ...questions[currques]?.incorrect_answers]))
  }, [questions,currques])

  // console.log(options);
  function reverseOptions(allOptionsArray) {
    return allOptionsArray.sort(() => Math.random() - 0.5);
  }
  return (<>

    <div className='flex flex-col justify-center items-center '>
      <span className='mt-6 font-mono  tracking-[2px] shadow-lg shadow-slate-950 text-xl border-2 border-solid border-black px-3 py-2 lg:text-4xl '>Welcome,{name}</span>

      {/* category and score */}
      <div className='flex gap-24 lg:justify-between lg:gap-52 items-center mt-10'>
        <span>{questions[currques]?.category}</span>
        <span>Score:{score}
          {/* {console.log(questions[currques].category)} */}
        </span>
      </div>


      {
        questions ? <Question
          currques={currques}
          setCurrques={setCurrques}
          options={options}
          correct={questions[currques]?.correct_answer}
          score={score}
          SetScore={SetScore}
          SetQuestions={SetQuestions}
          questions={questions}

        /> :

          <CircularProgress size={50} className='mt-24 w-16' />
      }

    </div>
  </>
  )
}

export default Quiz