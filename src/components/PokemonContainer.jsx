import PokemonCard from './PokemonCard';
import '../style.css';

function PokemonContainer({ allPokemons }) {
  return (
    <div className="pokemon-container">
      {allPokemons.map((pokemon) => (
        <PokemonCard
          id={pokemon.id}
          name={pokemon.name}
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          key={pokemon.id}
          type={pokemon.types[0].type.name}
        />
      ))}
    </div>
  );
}
// type: result.types.map((type) => type.type.name).join(', '),
// "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png"
export default PokemonContainer;
