import React from 'react';
import { useNavigate } from 'react-router-dom';

const Result = ({ score, name, setName, setCat, setDifficulty, SetScore }) => {
  const percentage = (score / 10) * 100;
  let message;
  if (percentage >= 70) {
    message = `Congratulations, ${name}! You did great!`;
  } else if (percentage >= 50) {
    message = `Well done, ${name}! Keep it up!`;
  } else {
    message = `You can do better, ${name}. Keep practicing!`;
  }

  const navigate = useNavigate();

  function clkhandler() {
    navigate('/')
    setName("")
    setCat('')
    setDifficulty('')
    SetScore(0)

  }

  return (<>
    {
      score>=0 && name ?

        <div className='flex flex-col'>
          <section className='flex flex-col sm:mt-20 items-center justify-center mt-10 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-10 rounded-lg'>
            <h1 className='text-4xl font-extrabold mb-4'>{message}</h1>
            <div className='bg-white text-blue-500 p-8 rounded-lg shadow-md text-center'>
              <h2 className='text-2xl font-semibold mb-4'>Quiz Result</h2>
              <p className='text-lg mb-2'>Score: {score} / 10</p>
              <p className='text-lg mb-4'>Percentage: {percentage}%</p>
            </div>
          <button className='mx-auto mt-10 bg-black px-3 py-1 text-xl rounded-2xl text-white hover:font-semibold' onClick={clkhandler}>Play again</button>
          </section>

        </div>
        : <div className='flex flex-col'>

          <section className='flex flex-col items-center justify-center mt-10 sm:mt-20 bg-red-500 text-white p-10 rounded-lg'>
            <h1 className='text-4xl font-extrabold mb-4'>Oops! Session Expired.</h1>
            <p className='text-lg mb-4'>We couldn't retrieve the necessary information.</p>
            <p className='text-lg mb-4'>Please log in again to continue.</p>
          <button className='mx-auto mt-10 bg-blue-500 px-3 py-1 text-xl rounded-2xl text-white hover:bg-blue-600' onClick={clkhandler }>Login again</button>
          </section>
        </div>
    }  </>
  );
};

export default Result;