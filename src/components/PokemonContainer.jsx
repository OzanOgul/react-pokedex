import PokemonCard from './PokemonCard';
import '../style.css';

function PokemonContainer({ allPokemons, searchInput, filteredResults }) {
  console.log(searchInput);
  return (
    <div className="pokemon-container">
      {searchInput?.length > 1
        ? filteredResults.map((pokemon, index) => (
            <PokemonCard
              id={pokemon.id}
              name={pokemon.name}
              image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
              key={index}
              type={pokemon.types[0].type.name}
            />
          ))
        : allPokemons.map((pokemon, index) => (
            <PokemonCard
              id={pokemon.id}
              name={pokemon.name}
              image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
              key={index}
              type={pokemon.types[0].type.name}
            />
          ))}
    </div>
  );
}

// {searchInput.length > 0
//   ? filteredResults.map((pokemon) => (
//       <PokemonCard
//         id={pokemon.id}
//         name={pokemon.name}
//         image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
//         key={pokemon.id}
//         type={pokemon.types[0].type.name}
//       />
//     ))
//   : allPokemons.map((pokemon) => (
//       <PokemonCard
//         id={pokemon.id}
//         name={pokemon.name}
//         image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
//         key={pokemon.id}
//         type={pokemon.types[0].type.name}
//       />
//     ))}

// type: result.types.map((type) => type.type.name).join(', '),
// "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png"
export default PokemonContainer;
