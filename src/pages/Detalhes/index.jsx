import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemon } from "../../api/pokeApi";
import PokemonCard from "../../components/PokemonCard";

export default function Detalhes() {
  const { name } = useParams();

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    getPokemon(name).then(({ data }) => setPokemon(data));
  }, [name]);

  if (!pokemon) return <p className="p-6 text-center">Carregando…</p>;

  const { sprites, types, height, weight } = pokemon;

  return (
    <>

    <div className="grid place-items-center min-h-screen pb-55">
      <PokemonCard pokemon={pokemon} />
    </div>
    </>
  );
}
