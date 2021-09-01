import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

function Sidebar() {
  return (
    <SidebarStyled>
      <Navigation></Navigation>
    </SidebarStyled>
  );
}

const SidebarStyled = styled.div`
  width: 14.3rem;
  height: 100vh;
  position: fixed;
  background-color: var(--sidebar-dark-color);
`;

export default Sidebar;
