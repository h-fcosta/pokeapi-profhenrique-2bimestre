export default function PokemonCard({ pokemon }) {
  if (!pokemon) return null;

  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg p-6 max-w-xs text-center transform hover:scale-105 transition duration-300">
      <img
        className="w-40 h-40 mx-auto mb-4"
        src={pokemon.sprites?.other["official-artwork"]?.front_default}
        alt={pokemon.name}
      />
      <h2 className="text-2xl font-bold capitalize text-gray-800 mb-2">{pokemon.name}</h2>

      <div className="text-sm text-gray-700 space-y-2">
        <p>
          <span className="font-semibold">Tipos:</span> {pokemon.types?.map((t) => t.type.name).join(", ") || []}
        </p>
        <p>
          <span className="font-semibold">Habilidades:</span> {pokemon.abilities?.map((a) => a.ability.name).join(", ") || []}
        </p>
      </div>
    </div>
  
  );
}
