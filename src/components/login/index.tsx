"use client"; 

export default function Login() {
  return (
    <form className="flex flex-col">
      <input
        className="mb-4 p-2 text-xl border rounded"
        type="email"
        placeholder="Enter Your Email"
      />
      <input
        className="mb-4 p-2 text-xl border rounded"
        type="password"
        placeholder="Enter Your Password"
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
