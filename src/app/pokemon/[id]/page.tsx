"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Loading from "@/components/Loading";

export default function PokemonDetails() {
  const params = useParams(); 
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchData() {
      if (!params.id) return; 
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
        if (!res.ok) throw new Error("Not Found");
        const result = await res.json();
        setData(result);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [params.id]);

  if (loading) return <Loading />;
  if (error) return <p className="text-red-500 text-center">Pokémon Not Found</p>;

  return (
    <div className="p-4 text-center">
      <h1 className="text-3xl font-bold capitalize">{data.name}</h1>
      <img src={data.sprites.front_default} alt={data.name} className="mx-auto my-4" />
      <p>Height: {data.height}</p>
      <p>Weight: {data.weight}</p>
    </div>
  );
}
