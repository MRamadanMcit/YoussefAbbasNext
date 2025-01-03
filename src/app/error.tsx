"use client";

import Link from "next/link";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function errorPage({ error, reset }: ErrorProps) {
  return (
    <div className="pt-7 text-center">
      <div className="text-red-600 text-3xl font-semibold">
        Something went wrong
      </div>
      <h2 className="my-3 text-xl text-gray-700">
        Error Message: {error?.message}
      </h2>
      <button
        className="px-4 py-2 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-700"
        onClick={() => reset()}
      >
        Try again
      </button>
      <Link href="/" className="mt-6 text-blue-700 text-xl block underline">
        Go to home page
      </Link>
    </div>
  );
}
