"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandle = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === "") return toast.error("Username is Required");
    if (email === "") return toast.error("Email is Required");
    if (password === "") return toast.error("Password is Required");

    console.log({ username, email, password });
  };

  return (
    <form className="flex flex-col" onSubmit={formSubmitHandle}>
      <input
        className="mb-4 p-2 text-xl border rounded"
        type="text"
        placeholder="Enter Your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="mb-4 p-2 text-xl border rounded"
        type="email"
        placeholder="Enter Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="mb-4 p-2 text-xl border rounded"
        type="password"
        placeholder="Enter Your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="p-2 bg-blue-800 text-white font-bold rounded-lg"
      >
        Register
      </button>
    </form>
  );
}
