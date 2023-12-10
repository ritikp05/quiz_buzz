import React, { useEffect,useState } from 'react'
import Question from './Question';
import Loader from './Loader';
const Quiz = ({ name, score, questions, SetScore, SetQuestions ,loading ,setName,setDifficulty}) => {
  const [options, setOptions] = useState();
  const [currques, setCurrques] = useState(0);

  useEffect(() => {
    console.log(questions);
    setOptions(questions && reverseOptions([questions[currques]?.correct_answer, ...questions[currques]?.incorrect_answers]))
  }, [questions, currques])


  function reverseOptions(allOptionsArray) {
    return allOptionsArray.sort(() => Math.random() - 0.5);
  }

  return (<>{  loading ?
    <Loader name={name} score={score} SetScore={SetScore} 
    setName={setName} setDifficulty={setDifficulty} />
    :<div>

   <div className='flex flex-col sm:flex-row sm:gap-10 sm:mt-7 mb-2  justify-center items-center '>
      <span className='mt-2 font-mono  tracking-[2px] shadow-md shadow-slate-950 text-xl border-2 border-solid border-black px-3 py-2 lg:text-4xl '>Welcome,{name}</span>

      <div className='flex gap-24 lg:justify-between lg:gap-28 border-gray-100 items-center mt-4 shadow-lg bg-purple-600 text-white shadow-black py-2 rounded-lg font-mono font-bold text-lg px-2'>
        <span>{questions[currques]?.category}</span>
        <span>Score:{score}
        </span>
      </div>


    </div>
      {
       <Question
          currques={currques}
          setCurrques={setCurrques}
          options={options}
          correct={questions[currques]?.correct_answer}
          score={score}
          SetScore={SetScore}
          SetQuestions={SetQuestions}
          questions={questions}
             /> 
  }
  </div>
   } </>
  )
}

export default Quiz;