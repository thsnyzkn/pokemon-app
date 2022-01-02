import ImageWrapper from "./ui/ImageWrapper";

const PokemonImage = ({ name }) => (
  <ImageWrapper>
    <img
      src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`}
      alt={`${name}'s visual depiction`}
      width="60px"
      height="60px"
    />
  </ImageWrapper>
);

export default PokemonImage;
