import React from "react";
import styled from "styled-components";
import { ProductCard } from "../../components/product/ProductCard";
import { SectionTitle } from "../../components/SectionTitle";
import { Icon } from "../../components/icon/Icon";
import { ProductList } from "../../components/product/ProductList";
import { ContainerFlex } from "../../components/ContainerFlex";
import { generateArray } from "../../utils/array";
import { Link } from "react-router-dom";

export const ProductDetails = () => {
  return (
    <StyledProductDetails>
      <SectionTitle size={"1.6875rem"}>
        <Back to={"/market"}>
          <Icon
            iconId={"chevron-left"}
            width={"7"}
            height={"12"}
            viewbox={"0 0 7 12"}
          />
        </Back>
        Product Detail
      </SectionTitle>
      <ProductCard cardType={"details"} />
      <Favorites>
        <ProductList cardType={"person"}>
          <ContainerFlex as={"ul"} justify={"space-between"} wrap>
            {generateArray(5).map((product) => (
              <ProductCard cardType={"person"} />
            ))}
          </ContainerFlex>
        </ProductList>
      </Favorites>
    </StyledProductDetails>
  );
};

const Back = styled(Link)`
  vertical-align: sub;
  margin-right: 30px;
  display: inline-block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #e6e8ec;
  position: relative;
  cursor: pointer;
  animation: wiggle 1s ease-in-out infinite paused;

  &:hover {
    background-color: #00000022;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-65%, -50%);
  }

  @keyframes wiggle {
    0%,
    100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(20%);
    }
  }
`;

const StyledProductDetails = styled.section`
  margin-top: 83px;

  ${SectionTitle} {
    margin-bottom: 52px;

    &:hover ${Back} {
      animation-play-state: running;
    }
  }
`;

const Favorites = styled.div`
  margin-top: 68px;
`;
