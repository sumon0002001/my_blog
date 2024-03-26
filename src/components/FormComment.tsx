"use client";

import React, { ChangeEvent, useState } from "react";

const FormComment = () => {
  const [comments, setComments] = useState("");

  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComments(e.target.value);
  };

  const handleClick = () => {
    console.log(comments);
  };
  return (
    <div>
      <div className="mt-4">
        <label
          htmlFor="comment"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Add Comment
        </label>
        <input
          type="text"
          className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          name="comment"
          value={comments}
          onChange={handleCommentChange}
        />
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-2 disabled:bg-gray-400"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FormComment;
