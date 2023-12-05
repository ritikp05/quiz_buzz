import React from 'react';

const Result = ({score, name}) => {
  return (<>
<section className='flex flex-col mt-10 bg-gray-400 p-20 rounded-full  px-28 '>
<h1 className='text-2xl text-red-300  font-Pacifico'>Congratulations</h1>
    <div><h1>score={score} </h1>
    <h1>name={name} </h1></div>
</section>
    </>
  
  )
}

export default Result