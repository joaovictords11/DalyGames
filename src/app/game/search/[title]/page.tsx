import Container from "@/components/container";
import GameCard from "@/components/GameCard";
import Input from "@/components/input";
import { GameProps } from "@/utils/types/game";
import React from "react";

async function getData(title: string) {
  try {
    const decodeTitle = decodeURI(title);

    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&title=${decodeTitle}`
    );
    return res.json();
  } catch (error) {
    return null;
  }
}

const Search = async ({ params }: { params: { title: string } }) => {
  const games: GameProps[] = await getData(params.title);

  return (
    <main className="w-full text-black">
      <Container>
        <Input />
        <h1 className="font-bold text-xl mt-8 mb-5">
          Veja oque encontramos na nossa base:
        </h1>
        {!games && <p>Esse jogo não foi encontrado!...</p>}
        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {games && games.map((item) => <GameCard key={item.id} data={item} />)}
        </section>
      </Container>
    </main>
  );
};

export default Search;
