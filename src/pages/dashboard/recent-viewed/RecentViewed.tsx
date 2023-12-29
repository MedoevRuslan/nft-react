import React from "react";
import styled from "styled-components";
import { MoreButton } from "../MoreButton";
import { ContainerFlex } from "../../../components/ContainerFlex";
import { SectionTitle } from "../../../components/SectionTitle";
import { RecentViewedList } from "./RecentViewedList";

export const RecentViewed = () => {
  return (
    <StyledRecentViewed>
      <ContainerFlex justify={"space-between"} align={"center"}>
        <SectionTitle size={"1.3125rem"}>Recent Viewed</SectionTitle>
        <MoreButton />
      </ContainerFlex>
      <RecentViewedList />
    </StyledRecentViewed>
  );
};

const StyledRecentViewed = styled.div`
  & > ${ContainerFlex} {
    margin-bottom: 28px;
    padding-right: 8px;
  }

  border-radius: 16px;
  border: 1px solid #edf2f7;
  background-color: #fff;
  box-shadow: 10px 10px 50px 0 rgba(20, 20, 22, 0.1);
  padding: 30px 24px 30px 28px;
`;
