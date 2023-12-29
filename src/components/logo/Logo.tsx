import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { ContainerFlex } from "../ContainerFlex";

export const Logo = () => {
  return (
    <StyledLogo href="#">
      <ContainerFlex align={"center"} gap={"6px"}>
        <Icon iconId={"logo"} width="46" viewbox="0 0 46 46" />
        <span>DiveSea</span>
      </ContainerFlex>
    </StyledLogo>
  );
};

const StyledLogo = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.5rem;
  font-weight: 600;

  & > ${ContainerFlex} {
    position: relative;
  }

  & > ${ContainerFlex}::after {
    content: "";
    position: absolute;
    display: block;
    bottom: -8px;
    background-color: #e2e8f0;
    height: 1px;
    width: 100%;
  }
`;
