import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { BestSellersList } from "./BestSellersList";
import { ContainerFlex } from "../../../components/ContainerFlex";
import { MoreButton } from "../MoreButton";

export const BestSellers = () => {
  return (
    <StyledBestSellers>
      <ContainerFlex justify={"space-between"} align={"center"}>
        <SectionTitle size={"1.3125rem"}>Best Sellers</SectionTitle>
        <MoreButton />
      </ContainerFlex>
      <BestSellersList />
    </StyledBestSellers>
  );
};

const StyledBestSellers = styled.div`
  margin-bottom: 30px;
  border-radius: 16px;
  border: 1px solid #edf2f7;
  background-color: #fff;
  box-shadow: 10px 10px 50px 0 rgba(20, 20, 22, 0.1);
  padding: 30px 24px 30px 20px;

  & > ${ContainerFlex} {
    margin-bottom: 28px;
    padding: 0 8px 0 4px;
  }
`;
