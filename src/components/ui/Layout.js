import styled from "styled-components";

const Layout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 60vw;
  padding: 2rem;
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

export default Layout;
