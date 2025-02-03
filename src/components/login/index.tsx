"use client";

import React, { useState } from "react";
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const formSubmitHandle = (e: React.FormEvent) => {
    e.preventDefault();

    if(email === "") return toast.error("Email is Required");
    if(password === "") return toast.error("Password is Required");

    console.log({ email, password });
    router.replace('/');
  };

  return (
    <form className="flex flex-col" onSubmit={formSubmitHandle}>
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
        Login
      </button>
    </form>
  );
}
