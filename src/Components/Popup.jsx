import React from 'react'

const Popup = ({Setpopup}) => {
  return (
   <>

    <div className="fixed sm:top-24 top-0   w-full left-0 z-50 flex items-center justify-center">
      <div className="bg-white sm:px-8 sm:py-20 border-black border-2 p-8 mx-4 md:mx-auto max-w-md rounded-lg shadow-md">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Welcome to the Quiz!</h2>
          <p className="text-gray-600 pt-3">Please review the rules before starting:</p>
          <hr className="my-2 border-t border-2 border-gray-300" />
        </div>
        <ul className="list-disc pl-6 text-gray-700">
          <li className="mb-2">There are a total of 10 questions.</li>
          <li className="mb-2">You have 10 seconds to answer each question.</li>
          <li className="mb-2">Each correct answer earns you one point.</li>
          <li className="mb-2">You cannot go back to any question after submitting an answer.</li>
        </ul>
        <button
          className="mt-8 bg-blue-500 text-white  px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
          onClick={()=>Setpopup(false)}
        >
          Close
        </button>
      </div>
    </div>


   </>
    )
}

export default Popup