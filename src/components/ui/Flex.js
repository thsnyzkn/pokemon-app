import styled from "styled-components";
import PropTypes from "prop-types";

const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "column" ? "column" : "row"};
  align-items: ${({ align }) => align === "center" && "center"};
`;

export default Flex;

Flex.propTypes = {
  direction: PropTypes.string,
};
Flex.defaultProps = {
  direction: "column",
};
