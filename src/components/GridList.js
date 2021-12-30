import styled from "styled-components";

const GridList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  background-color: red;
  margin: 0;
  place-items: center;
  list-style-type: none;
  width: 100%;
  grid-gap: 1rem;
`;

export default GridList;
