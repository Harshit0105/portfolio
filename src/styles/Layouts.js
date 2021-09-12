import styled from "styled-components";

export const MainLayout = styled.div`
  padding: 4rem;
  @media screen and (max-width: 640px) {
    padding: 3rem;
  }
  @media screen and (max-width: 510px) {
    padding: 2rem;
  }
`;

export const InnerLayout = styled.div`
  padding: 4rem 0;
`;
