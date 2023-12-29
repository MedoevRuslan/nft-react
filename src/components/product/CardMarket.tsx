import React from "react";
import Image from "../../assets/images/products/image-1.png";
import ImageRetina from "../../assets/images/products/image-1@2.png";
import styled from "styled-components";
import { ContainerImage } from "../ContainerImage";
import { Card } from "./Card.styled";
import { ProductImage } from "./ProductImage.styled";
import { ProductTitle } from "./ProductTitle.styled";
import { ProductButton } from "./ProductButton.styled";

export const CardMarket = () => {
  return (
    <Card padding={"9px"} borderRadius={"16px"}>
      <ContainerImage width={"176px"}>
        <ProductImage
          radius={"13px"}
          src={Image}
          srcSet={`${ImageRetina} 2x`}
          alt="product-image"
        />
      </ContainerImage>
      <ProductTitle fontSize={"0.875rem"}>Sun-Glass</ProductTitle>
      <ProductInfoContainer>
        <ProductInfo>
          Current bid
          <span>1.75</span>
        </ProductInfo>
        <ProductButton fontSize={"0.625rem"} padding={"10px 18px"} uppercase>
          place bid
        </ProductButton>
      </ProductInfoContainer>
    </Card>
  );
};

const ProductInfo = styled.span`
  font-size: 0.625rem;
  color: #94a3b8;

  span {
    display: block;
    margin-top: 0.4em;
    font-size: 0.75rem;
    color: ${(props) => props.theme.colors.accent};
  }
`;

const ProductInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2px 3px;
`;
