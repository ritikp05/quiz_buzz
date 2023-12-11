import React from "react";
import { useNavigate } from "react-router-dom";
// import { CircularProgressbar } from "react-circular-progressbar";
import { HiOutlineTrophy } from "react-icons/hi2";
import CircularProgress from "@mui/joy/CircularProgress";
import "react-circular-progressbar/dist/styles.css";

const Result = ({ score, name, setName, setCat, setDifficulty, SetScore }) => {
  const percentage = (score / 10) * 100;
  let message;
  if (percentage >= 70) {
    message = `Congratulations, ${name}! You did great! ${(
      <HiOutlineTrophy />
    )}`;
  } else if (percentage >= 50) {
    message = `Well done, ${name}! Keep it up! ${(<HiOutlineTrophy />)}`;
  } else {
    message = `You can do better, ${name}. Keep practicing! `;
  }

  const navigate = useNavigate();

  function clkhandler() {
    navigate("/");
    setName("");
    setCat("");
    setDifficulty("");
    SetScore(0);
  }

  return (
    <>
      {score >= 0 && name ? (
        <div className="flex flex-col">
          <section className="flex flex-col sm:mt-16 mb-2 items-center justify-center mt-10 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-8  rounded-lg">
            <h1 className="sm:text-4xl text-3xl text-center font-extrabold mb-4 ">
              {message}
            </h1>
            <div className=" text-white p-8 w-full  sm:mt-2 rounded-lg shadow-lg border-t-2 border-b-8 border-r-8 border-l-4 text-center">
              <div className="flex justify-center sm:flex-row flex-col items-center gap-2  text-3xl   mb-4 ">
                {" "}
                <HiOutlineTrophy className="sm:text-4xl text-3xl  mb-1  text-yellow-200 " />{" "}
                <h2 className=" text-lime-300 font-semibold  font-LoveYa tracking-widest  ">
                  Test Performance
                </h2>
              </div>{" "}
              <section className="flex gap-4 sm:gap-8  flex-row flex-wrap text-black justify-center items-center sm:px-6 px-2 sm:py-4 py-2">
                <div className="flex flex-col gap-1">
                  <CircularProgress
                    determinate
                    value={100}
                    sx={{ "--CircularProgress-size": "80px" }}
                  >
                    10
                  </CircularProgress>
                  <p className="text-base ">Total</p>
                </div>
                <div className="flex flex-col gap-1">
                  <CircularProgress
                    determinate
                    value={score}
                    sx={{ "--CircularProgress-size": "80px" }}
                  >
                    {score}
                  </CircularProgress>
                  <p className="text-base">Score</p>
                </div>
                <div className="flex flex-col gap-1 ">
                  <CircularProgress
                    determinate
                    sx={{ "--CircularProgress-size": "80px" }}
                    value={percentage}
                  >
                    {percentage}%
                  </CircularProgress>
                  <p className="text-base ">Percentage</p>
                </div>
              </section>
            </div>
            <button
              className="mx-auto mt-10 bg-black px-3 py-1 text-xl rounded-2xl text-white hover:font-semibold"
              onClick={clkhandler}
            >
              Play again
            </button>
            <button
              className="mx-auto mt-10 bg-black px-3 py-1 text-xl rounded-2xl text-white hover:font-semibold"
              onClick={() => navigate("/feedback")}
            >
              Feedback
            </button>
          </section>
        </div>
      ) : (
        <div className="flex flex-col">
          <section className="flex flex-col items-center justify-center mt-10 sm:mt-20 bg-red-500 text-white p-10 rounded-lg">
            <h1 className="text-4xl font-extrabold mb-4">
              Oops! Session Expired.
            </h1>
            <p className="text-lg mb-4">
              We couldn't retrieve the necessary information.
            </p>
            <p className="text-lg mb-4">Please log in again to continue.</p>
            <button
              className="mx-auto mt-10 bg-blue-500 px-3 py-1 text-xl rounded-2xl text-white hover:bg-blue-600"
              onClick={clkhandler}
            >
              Login again
            </button>
          </section>
        </div>
      )}{" "}
    </>
  );
};

export default Result;
