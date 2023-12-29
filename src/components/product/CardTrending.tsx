import React from "react";
import Image from "../../assets/images/products/image-1.png";
import ImageRetina from "../../assets/images/products/image-1@2.png";
import styled from "styled-components";
import { CardProps } from "./ProductCard";
import { ContainerImage } from "../ContainerImage";
import { Card } from "./Card.styled";
import { ProductImage } from "./ProductImage.styled";
import { ProductTitle } from "./ProductTitle.styled";
import { ProductButton } from "./ProductButton.styled";

export const CardTrending = (props: CardProps) => {
  return (
    <Card padding={"8px"} borderRadius={"13px"}>
      <ContainerImage width={"144px"}>
        <ProductImage
          radius={"13px"}
          src={Image}
          srcSet={`${ImageRetina} 2x`}
          alt="product-image"
        />
      </ContainerImage>
      <ProductTitle fontSize={"0.75rem"}>Sun-Glass</ProductTitle>
      <ProductInfoContainer>
        <ProductInfo>
          Current bid
          <span>1.75</span>
        </ProductInfo>
        <ProductButton fontSize={"0.5rem"} padding={"9px 14px"} uppercase>
          place bid
        </ProductButton>
      </ProductInfoContainer>
    </Card>
  );
};

const ProductInfo = styled.span`
  font-size: 0.5rem;
  color: #94a3b8;

  span {
    display: block;
    margin-top: 0.4em;
    font-size: 0.5625rem;
    color: ${(props) => props.theme.colors.accent};
  }
`;

const ProductInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2px 3px;
`;
