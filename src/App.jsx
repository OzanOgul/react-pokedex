import { useEffect, useState } from 'react';
import './style.css';
import Header from './components/Header';
import PokemonContainer from './components/PokemonContainer';
import SearchPokemon from './components/SearchPokemon';

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=20'
  );
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  async function getAllPokemons() {
    const res = await fetch(loadMore);
    const data = await res.json();
    // console.log(data);

    setLoadMore(data.next);

    function createPokemonObj(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((curPokemonList) => [...curPokemonList, data]);
        await allPokemons.sort((a, b) => a.id - b.id);
      });
    }
    createPokemonObj(data.results);
  }
  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="app-container">
      <Header />
      <SearchPokemon
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        filteredResults={filteredResults}
        setFilteredResults={setFilteredResults}
        allPokemons={allPokemons}
      />
      <PokemonContainer
        allPokemons={allPokemons}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        filteredResults={filteredResults}
      />
      <button className="load-button" onClick={() => getAllPokemons()}>
        Load Pokemon
      </button>
    </div>
  );
}

export default App;
