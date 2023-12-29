import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { ContainerFlex } from "../../../components/ContainerFlex";
import { ShopLink } from "../ShopLink";
import { ProductList } from "../../../components/product/ProductList";

export const Trending = () => {
  return (
    <StyledTrending>
      <ContainerFlex justify={"space-between"} align={"center"}>
        <SectionTitle size={"1.5625rem"}>Trending</SectionTitle>
        <ShopLink href="#">View all</ShopLink>
      </ContainerFlex>
      <ProductList show={4} cardType={"trending"} />
    </StyledTrending>
  );
};

const StyledTrending = styled.section`
  margin-bottom: 46px;

  & > ${ContainerFlex} {
    margin-bottom: 30px;
  }
`;
