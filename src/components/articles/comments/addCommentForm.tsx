"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";

export default function AddCommentForm() {
  const [text, setText] = useState("");

  const formSubmitHandle = (e: React.FormEvent) => {
    e.preventDefault();

    if (text === "") return toast.error("please write something");

    console.log({ text });
  };

  return (
    <form onSubmit={formSubmitHandle} className="mt-4">
      <input
        className="w-full p-2 bg-white text-xl rounded-lg focus:shadow-md"
        type="text"
        placeholder="Add comment..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="w-min mt-2 p-1 bg-green-700 text-white text-xl rounded-lg transition hover:bg-green-900"
      >
        Comment
      </button>
    </form>
  );
}
