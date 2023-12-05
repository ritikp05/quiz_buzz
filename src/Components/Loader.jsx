import React from 'react'
import "../loader.css"
import { useNavigate } from 'react-router-dom'
const Loader = ({ name, score,setName,SetScore, setDifficulty }) => {

const navigate=useNavigate();
  
  function clkhandler() {
    navigate('/')
    setName("")
    setCat('')
    setDifficulty('')
    SetScore(0)

  }

  return (<>{
    score >= 0 && name ?
      <div className="loader m-auto font-mono lg:text-6xl md:text-5xl sm:text-5xl text-3xl">    </div>
      : <section className='flex flex-col items-center justify-center mt-10 p-8 bg-white rounded-lg shadow-lg border-2 sm:mt-20'>
        <h1 className='text-3xl font-extrabold mb-2 text-red-600'>Oops! Something went wrong.</h1>
        <p className='text-lg mb-4 text-gray-600'>Sorry for the inconvenience.</p>
        <p className='text-lg mb-8 text-gray-600'>Please log in again to continue.</p>
        <button
          onClick={clkhandler}
          className='bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue'
        >
          Log In
        </button>
      </section>
  }

  </>
  )
}

export default Loader;