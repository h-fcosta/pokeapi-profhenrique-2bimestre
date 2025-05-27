import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listPokemons } from "../../api/pokeApi";
import PokemonList from "../../components/PokemonList";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listPokemons().then(({ data }) => {
      setPokemons(data.results);
      setLoading(false);
    });
  }, []);

  console.log(pokemons);

  if (loading) return <p className="p-6 text-center">Carregando…</p>;

  return (
    <>
      <div className="mx-auto max-w-6xl p-4">
        <h1 className="mb-6 text-center text-4xl font-extrabold">
          Pokédex&nbsp;<span className="text-gray-400">(Kanto)</span>
        </h1>

        <PokemonList pokemons = {pokemons} />
        </div>

    </>
  );
}
