import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import { TextField } from "@mui/material";
const Feedback = () => {
  const [rating, Setrating] = useState(0);
  const [quality, Setquality] = useState(0);
  const [message, Setmesage] = useState("");
  return (
    <form
      action="https://formspree.io/f/xnqkeoqn"
      method="POST"
      className=" flex flex-col gap-4 mt-10 bg-slate-400 p-10 rounded-2xl  shadow-lg ">
      <div className="w-full bg-white p-5 font-semibold flex flex-col gap-2">
        <p className="font-Playpen">Rate the difficulty of the test ?</p>
        <Rating
          name="Difficulty Rating"
          value={rating}
          onChange={(event, newValue) => {
            Setrating(newValue);
          }}
        />
      </div>

      <div className="w-full bg-white p-4 font-semibold flex flex-col gap-2">
        <p className="font-Playpen">Rate the Quality of the test ?</p>

        <Rating
          name="Quality Rating"
          value={quality}
          onChange={(event, newValue) => {
            Setquality(newValue);
          }}
        />
      </div>

      <div className="w-full bg-white px-4 py-4 flex flex-col gap-2">
        <TextField
          id="standard-basic"
          onChange={(e) => Setmesage(e.target.value)}
          value={message}
          name="message"
          label="Leave a comment"
          multiline="true"
          maxRows={3}
          variant="standard"
        />
      </div>
      <button
        type="submit"
        className="bg-red-500 text-white w-1/2 px-4 py-1 rounded-lg mx-auto hover:bg-red-600"
      >
        Submit
      </button>
    </form>
  );
};

export default Feedback;
