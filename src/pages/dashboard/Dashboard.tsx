import React from "react";
import styled from "styled-components";
import { DashboardMain } from "./DashboardMain";
import { DashboardSellers } from "./DashboardSellers";
import { ContainerFlex } from "../../components/ContainerFlex";

export const Dashboard = () => {
  return (
    <StyledDashboard>
      <ContainerFlex gap={"28px"}>
        <DashboardMain />
        <DashboardSellers />
      </ContainerFlex>
    </StyledDashboard>
  );
};

const StyledDashboard = styled.div`
  margin-top: 32px;
`;
