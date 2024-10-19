"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { FiSearch } from "react-icons/fi";

const Input = () => {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();

    if (input === "") return;

    router.push(`/game/search/${input}`);
  };

  return (
    <form
      className="w-full flex justify-between bg-slate-200 my-5 gap-2 items-center rounded-lg p-2"
      onSubmit={handleSearch}
    >
      <input
        className="bg-slate-200 outline-none w-11/12"
        type="text"
        placeholder="Procurando algum jogo?..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="hover:scale-110 transition-all duration-200">
        <FiSearch size={24} color="#ea580c" />
      </button>
    </form>
  );
};

export default Input;
