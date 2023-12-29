import React from "react";
import styled from "styled-components";
import { Logo } from "../../../components/logo/Logo";
import { Menu } from "./navigation/Menu";
import { ContainerFlex } from "../../../components/ContainerFlex";

export const Sidebar = () => {
  return (
    <StyledSidebar>
      <ContainerFlex direction={"column"} gap={"60px"}>
        <Logo />
        <Menu />
      </ContainerFlex>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.section`
  background-color: #f9f9f9;
  width: 250px;
  flex-shrink: 0;
  padding: 43px 24px 30px;
`;
