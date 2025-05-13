import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemon } from "../../api/pokeApi";

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
      <div className="max-w-xl mx-auto p-6">
        <Link to="/" className="text-blue-600 hover:underline">
          Voltar
        </Link>

        <h1 className="text-4xl font-bold mt-4 capitalize">{name}</h1>

        <img
          src={sprites.other["official-artwork"].front_default}
          alt={name}
          className="w-52 mx-auto my-6"
        />

        <ul className="space-y-1 text-lg">
          <li>
            <strong>Tipos:</strong> {types.map((t) => t.type.name).join(", ")}
          </li>
          <li>
            <strong>Altura:</strong> {height / 10} m
          </li>
          <li>
            <strong>Peso:</strong> {weight / 10} kg
          </li>
        </ul>
      </div>
    </>
  );
}
