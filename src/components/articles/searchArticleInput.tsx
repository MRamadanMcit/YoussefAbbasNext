"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchArticleInput() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const formSubmitHandle = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({ searchText });
    router.push(`/articles/search?searchText=${searchText}`);
  };

  return (
    <form className="w-full py-5 m-auto md:w-2/3" onSubmit={formSubmitHandle}>
      <input
        className="w-full p-3 text-gray-900 text-xl border-none rounded"
        type="text"
        placeholder="Search for article"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
}
