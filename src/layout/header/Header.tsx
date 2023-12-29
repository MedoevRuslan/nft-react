import React from "react";
import styled from "styled-components";
import { Search } from "./search/Search";
import { UserInfo } from "./userinfo/UserInfo";
import { ContainerFlex } from "../../components/ContainerFlex";

export const Header = () => {
  return (
    <StyledHeader>
      <ContainerFlex gap={"52px"}>
        <Search />
        <UserInfo />
      </ContainerFlex>
    </StyledHeader>
  );
};

const StyledHeader = styled.header``;
