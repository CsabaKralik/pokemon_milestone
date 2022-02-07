import "../pokedex.json";
import Pokemon from "./Pokemon";

function PokemonList(props) {
  const pokemons = props.pokemons.slice(0, 50);
  const pokemonsDisplay = [];
  for (const pokemon of pokemons) {
    pokemonsDisplay.push(
      <Pokemon
        key={pokemon.id}
        name={pokemon.name}
        img={pokemon.img}
        type={pokemon.type}
      />
    );
  }
  return <div className="pokemon-container">{pokemonsDisplay}</div>;
}
export default PokemonList;
