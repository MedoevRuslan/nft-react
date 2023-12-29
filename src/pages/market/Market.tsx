import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../components/SectionTitle";
import { ProductFilter } from "../../components/ProductFilter";
import { ProductList } from "../../components/product/ProductList";

export const Market = () => {
  return (
    <StyledMarket>
      <SectionTitle size={"2.5rem"}>Discover NFTs</SectionTitle>
      <ProductFilter />
      <ProductList show={10} cardType={"market"} />
    </StyledMarket>
  );
};

const StyledMarket = styled.section`
  margin-top: 82px;
`;
