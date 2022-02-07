import Type from "./Type";
function Pokemon(props) {
  return (
    <div className="pokemon">
      <h1 className="pokemon-name">{props.name}</h1>
      <img src={props.img} alt="pokemon" className="pokemon-img" />
      <div className="pokemon-type">
        {props.type.map((type) => {
          return <Type key={type} type={type} />;
        })}
      </div>
    </div>
  );
}
export default Pokemon;
