import '../style.css';

const colors = {
  fire: '#ffc078',
  grass: '#bbf7d0',
  electric: '#ffec99',
  water: '#b5eef4',
  ground: '#d3ba4c',
  rock: '#b2afa4',
  fairy: '#fcc2d7',
  poison: '#d6b3ff',
  bug: '#C9D698',
  dragon: '#97b3e6',
  psychic: '#efa8f7',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#fff',
  ice: '#e0f5ff',
  ghost: '#7b62a3',
  steel: '#9ca3af',
  dark: '#495057',
};

function PokemonCard({ id, name, image, type }) {
  const color = colors[type];
  const pokemonName = name[0].toUpperCase() + name.slice(1);
  const pokemonID = id.toString().padStart(3, '0');
  const typeToUpper = type[0].toUpperCase() + type.slice(1);

  return (
    <div className="pokemon-card" style={{ backgroundColor: color }}>
      <img className="poke-img" src={image} alt={name} />
      <p className="poke-id">#{pokemonID}</p>
      <h3 className="poke-name">{pokemonName}</h3>
      <p className="poke-type">{typeToUpper}</p>
    </div>
  );
}

export default PokemonCard;
