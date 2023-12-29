import React from "react";
import styled from "styled-components";
import { ProductList } from "../../components/product/ProductList";
import { ContainerFlex } from "../../components/ContainerFlex";
import { ProductCard } from "../../components/product/ProductCard";
import { generateArray } from "../../utils/array";

export const ProfileCollection = () => {
  return (
    <StyledProfileCollection>
      <ProductList cardType={"person"}>
        <ContainerGrid>
          {generateArray(5).map((product) => (
            <ProductCard cardType={"person"} />
          ))}
        </ContainerGrid>
      </ProductList>
    </StyledProfileCollection>
  );
};

const StyledProfileCollection = styled.section`
  margin: -53px;
  padding: 53px;
  height: 640px;

  mask-image: linear-gradient(
    to bottom,
    transparent,
    #000 31px,
    #000 calc(100% - 31px),
    transparent
  );
  mask-repeat: no-repeat;
  overflow-y: auto;
  ${ContainerFlex} {
    &::after {
      content: "";
      flex: auto;
    }
  }
`;

const ContainerGrid = styled.ul`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(3, 185px);
  row-gap: 28px;
`;
