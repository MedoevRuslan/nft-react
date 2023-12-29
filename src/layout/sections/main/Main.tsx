import styled from "styled-components";
import { Header } from "../../header/Header";
import React from "react";
import { Outlet } from "react-router-dom";
import { ContainerApp } from "../../../components/ContainerApp";

export const Main = () => {
  return (
    <StyledMain>
      <ContainerApp>
        <Header />
        <Outlet />
      </ContainerApp>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  width: 100%;
  height: 100%;
  padding: 30px 40px;
`;
