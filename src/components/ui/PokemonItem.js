import styled from "styled-components";

const PokemonCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: 100%;
  height: 100%;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
`;

export default PokemonCard;
