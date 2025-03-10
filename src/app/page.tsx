"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link"; 
import { useGetPokemonQuery } from "../store/pokemonApi";
import { useForm } from "react-hook-form";


interface FormData {
  name: string;
}

export default function Home() {
  const { register, handleSubmit } = useForm<FormData>();
  const [pokemonName, setPokemonName] = useState("");

  const { data, error, isLoading } = useGetPokemonQuery(pokemonName, {
    skip: !pokemonName,
  });

  const onSubmit = (formData: FormData) => {
    setPokemonName(formData.name.toLowerCase());
  };

  // Play Pokémon cry when data is successfully loaded
  useEffect(() => {
    if (data?.cries?.latest) {
      const audio = new Audio(data.cries.latest);
      audio.play().catch((err) => console.error("Error playing sound:", err));
    }
  }, [data]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Pokémon Search</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
        <input
          {...register("name")}
          placeholder="Enter Pokémon Name"
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Search
        </button>
      </form>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error fetching data</p>}
      {data && (
        <div>
          <h2 className="text-xl font-semibold">
            <Link href={`/pokemon/${data.name}`} className="text-blue-500 underline">
              {data.name}
            </Link>
          </h2>
          <p>Height: {data.height}</p>
          <p>Weight: {data.weight}</p>
          <img src={data.sprites.front_default} alt={data.name} />
        </div>
      )}
    </div>
  );
}
