import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listPokemons } from "../../api/pokeApi";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listPokemons().then(({ data }) => {
      setPokemons(data.results);
      setLoading(false);
    });
  }, []);

  const spriteUrl = (url) => {
    const id = url.split("/").filter(Boolean).pop();
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  };

  console.log(pokemons);

  if (loading) return <p className="p-6 text-center">Carregando…</p>;

  return (
    <>
      <div className="mx-auto max-w-6xl p-4">
        <h1 className="mb-6 text-center text-4xl font-extrabold">
          Pokédex&nbsp;<span className="text-gray-400">(Kanto)</span>
        </h1>

        <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {pokemons.map((p) => (
            <li key={p.name} className="group relative">
              {/* estrela (favorito futuro) */}
              <span className="absolute right-2 top-2 text-yellow-400 opacity-0 transition group-hover:opacity-100">
                ⭐
              </span>

              <Link
                to={`/detalhes/${p.name}`}
                className="flex flex-col items-center rounded-2xl border border-gray-700
                         bg-gray-800/40 p-4 backdrop-blur hover:scale-105
                         hover:shadow-xl transition"
              >
                <img
                  src={spriteUrl(p.url)}
                  alt={p.name}
                  className="h-24 w-24 object-contain drop-shadow"
                  loading="lazy"
                />
                <span className="mt-3 text-center capitalize">{p.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
