import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { MenuItem } from '@mui/material';
import categories from '../Data/category';
import { useNavigate } from "react-router-dom"

import { toast } from 'react-toastify';
const Home = ({ name, setName, fetchData }) => {
  const [category, setCat] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  function handleSubmit() {

    if (!category || !difficulty || !name) {
      setError(true);
      error && toast.error("Please fill the form")

    }
    else {
      setError(false);
      fetchData(category, difficulty);
      navigate('/quiz');
      toast.success("Time to play and learn!")
    }
  }

  return (

    <div className='flex flex-col lg:flex-row lg:gap-1  lg:justify-around lg:items-center w-full mt-6 lg:w-full  h-auto lg:h-screen   px-1'>
      {/* <img 
      className="bg-black  w-full  lg:w-auto  border-4 lg:border-none lg:shadow-lg rounded-full lg:shadow-blue-600 border-blue-600"
       src='quizimg2.jpg' alt='ds'  /> */}
      <div className='flex flex-col mt-14 gap-1'>

        <h4 className="text-xl lg:2xl underline text-gray-500 mx-auto mt-12  lg:mt-5 mb-10  ">Create Your Quiz Profile</h4>

        <TextField id="standard-basic" label="Enter Your name" type='text'
          inputProps={{ maxLength: 10 }}
          variant="standard" value={name}
          onChange={(e) => { setName(e.target.value) }} />
        <br />
        <TextField select label="Select Category" variant='standard'
          onChange={(e) => { setCat(e.target.value); }}
          value={category} >

          {
            categories.map((data) => {
              return (

                <MenuItem key={data.category} value={data.value}>{data.category}</MenuItem>

              )
            })
          }
        </TextField>

        <br />
        <TextField select label="Select Difficulty" variant='standard'
          value={difficulty}
          onChange={(e) => { setDifficulty(e.target.value); }}>

          <MenuItem key="Easy" value="easy">Easy</MenuItem>
          <MenuItem key="Medium" value="medium">Medium</MenuItem>
          <MenuItem key="Hard" value="hard">Hard</MenuItem>

        </TextField>
        <br />
        <button className='bg-purple-600 hover:bg-purple-800 text-white text-xl py-3 w-72 lg:w-full mt-8 m-auto  rounded-2xl ' onClick={handleSubmit}>
          Start Quiz
        </button>
      </div>
    </div>

  )
}

export default Home;










// https://media.tenor.com/CTPzB_ShuI8AAAAi/asking-questions.gif

// https://media.tenor.com/Go_fIq5JK3AAAAAi/esteesellugar.gif

// https://cdn.pixabay.com/animation/2022/07/31/20/41/20-41-56-968_512.gif

// quiz time
// https://media.tenor.com/LhA5giwl8ZUAAAAd/pub-quiz-the-no-name-pub.gif