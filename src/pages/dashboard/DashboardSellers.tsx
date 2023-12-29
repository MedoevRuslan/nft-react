import React from "react";
import styled from "styled-components";
import { BestSellers } from "./best-sellers/BestSellers";
import { RecentViewed } from "./recent-viewed/RecentViewed";

export const DashboardSellers = () => {
  return (
    <StyledDashboardSellers>
      <BestSellers />
      <RecentViewed />
    </StyledDashboardSellers>
  );
};

const StyledDashboardSellers = styled.section`
  min-width: 365px;
`;
