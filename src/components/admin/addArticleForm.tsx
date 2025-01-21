"use client";

import React, { useState } from "react";
import { toast } from 'react-toastify';

export default function AddArticleForm() { 
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const formSubmitHandle = (e: React.FormEvent) => {
    e.preventDefault();

    if(title === "") return toast.error("Title is Required");
    if(description === "") return toast.error("Description is Required");

    console.log({ title, description });
  };

  return (
    <form className="flex flex-col" onSubmit={formSubmitHandle}>
      <input
        className="mb-4 p-2 text-xl border rounded"
        type="text"
        placeholder="Enter Article title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="mb-4 p-2 rounded resize-none lg:text-xl"
        rows={5}
        placeholder="Enter Article Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        type="submit"
        className="p-2 bg-blue-800 text-2xl text-white font-bold rounded-lg hover:bg-blue-900"
      >
        Add
      </button>
    </form>
  );
}
