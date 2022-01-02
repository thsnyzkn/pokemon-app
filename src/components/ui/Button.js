import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: none;
  background-color: transparent;
  font-weight: 500;
  font-size: 1.25rem;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;

export const RectangleButton = styled(Button)`
  position: initial;
  border-radius: 4px;
`;

export default Button;
