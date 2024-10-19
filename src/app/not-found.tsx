import Link from "next/link";
import React from "react";

const NotFound = () => {

  return (
    <main className="w-full ">
      <section className="flex justify-center items-center flex-col mt-20 gap-4">
        <h1 className="text-7xl font-bold">404</h1>
        <h2 className="text-2xl">Ops! Página não encontrada</h2>
        <Link
          href="/"
          className="mt-8 bg-slate-400 text-white px-3 py-2 rounded-md opacity-75 hover:opacity-100"
        >
          Voltar para home
        </Link>
      </section>
    </main>
  );
};

export default NotFound;
