import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Flex from "./ui/Flex";
import Label from "./ui/Label";
import Button from "./ui/Button";

const ItemWrapper = styled.div`
  position: relative;
  border: 1px solid black;
  min-width: 40%;
  background-color: white;
  @media (max-width: 768px) {
    min-width: 100%;
  }
  max-height: 460px;
  margin-top: 1.5rem;
`;

const Image = styled.img`
  width: 125px;
  height: 125px;
  margin-bottom: 1.5rem;
`;
const ImageWrapper = styled(Flex)`
  margin-top: 1.5rem;
  align-items: center;
`;
const Title = styled.span`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const AbilitiesList = styled.ul`
  margin: 0 0 1rem 0;
`;

const PokemonDetailItem = ({ pokemon, name }) => {
  const navigate = useNavigate();
  const { abilities, id, types, height } = pokemon ?? [];
  const pokemonTypes = types?.map(({ type: { name } }) => name).toString();
  return (
    <ItemWrapper data-testid={`detailed-info-${name}`}>
      <Button onClick={() => navigate("/pokemon")}>X</Button>
      <ImageWrapper>
        <Image
          src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`}
          alt={`${name}'s visual depiction`}
          data-testid="pokemon-image"
        />
        <Label data-testid="pokemon-name-detail">{name}</Label>
      </ImageWrapper>
      <Flex style={{ paddingLeft: "1rem" }}>
        <Label data-testid="pokemon-id">
          <Title>ID:</Title> {id}
        </Label>
        <Label>
          <Title>Type:</Title> {pokemonTypes}
        </Label>
        <Label>
          <Title>Height:</Title> {height}
        </Label>
        <Title> Abilities</Title>
        <AbilitiesList style={{ margin: "0 0 1rem 0" }}>
          {abilities?.map(({ ability: { name } }, index) => (
            <li key={index}>{name}</li>
          ))}
        </AbilitiesList>
      </Flex>
    </ItemWrapper>
  );
};

export default PokemonDetailItem;
