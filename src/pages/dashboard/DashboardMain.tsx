import React from "react";
import styled from "styled-components";
import { Hero } from "./hero/Hero";
import { Trending } from "./trending/Trending";
import { TopCollection } from "./top-collection/TopCollection";

export const DashboardMain = () => {
  return (
    <StyledDashboardMain>
      <Hero />
      <Trending />
      <TopCollection />
    </StyledDashboardMain>
  );
};

const StyledDashboardMain = styled.section`
  max-width: 715px;
  width: 100%;
`;
