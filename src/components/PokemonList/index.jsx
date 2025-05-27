import { Link } from "react-router-dom";

export default function PokemonList({ pokemons }) {
  const spriteUrl = (url) => {
    const id = url.split("/").filter(Boolean).pop();
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  };

  return (
    <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {pokemons.map((p) => (
        <li key={p.name} className="group relative">
          {/* Estrela (favorito futuro) */}

          <Link
            to={`/detalhes/${p.name}`}
            className="flex flex-col items-center rounded-2xl border border-gray-700
            bg-gray-800/40 p-4 backdrop-blur hover:scale-105
            hover:shadow-xl transition"
          >
            <span className="absolute right-2 top-2 text-yellow-400 opacity-0 transition group-hover:opacity-100">
              ⭐
            </span>
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
  );
}
