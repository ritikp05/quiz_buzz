import React, { useEffect, useState } from 'react';

const Result = ({ score }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('quizName');
    const storedCategory = localStorage.getItem('quizCategory');

    if (storedName) {
      setName(storedName);
    }

    if (storedCategory) {
      setCategory(storedCategory);
    }
  }, []);

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-5">Quiz Results</h1>
      <div className="mb-3">
        <p className="text-xl">
          <span className="font-semibold">Name:</span> {name}
        </p>
        <p className="text-xl">
          <span className="font-semibold">Category:</span> {category}
        </p>
        <p className="text-xl">
          <span className="font-semibold">Score:</span> {score}
        </p>
      </div>
      {/* Add more details or actions based on your requirements */}
    </div>
  );
};

export default Result;
