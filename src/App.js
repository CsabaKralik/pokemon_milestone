import pokemons from "./pokedex.json";
import PokemonList from "./components/PokemonList";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <div className="App">
      <SearchForm />
      <PokemonList pokemons={pokemons.pokemon} />
    </div>
  );
}

export default App;
