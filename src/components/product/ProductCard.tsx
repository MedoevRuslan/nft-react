import React from "react";
import styled from "styled-components";
import Image from "../../assets/images/products/image-1.png";
import ImageRetina from "../../assets/images/products/image-1@2.png";

type ProductPropsType = {
  img: string[];
  title: string;
  price: number;
};

export const Product = () => {
  return (
    <StyledProduct>
      <ProductImage
        src={Image}
        srcSet={`${ImageRetina} 2x`}
        alt="product-image"
      />
      <ProductTitle>Sun-Glass</ProductTitle>
      <ProductInfoContainer>
        <ProductInfo>
          Current bid
          <span>1.75</span>
        </ProductInfo>
        <ProductButton>place bid</ProductButton>
      </ProductInfoContainer>
    </StyledProduct>
  );
};

const StyledProduct = styled.li`
  padding: 8px;
  border-radius: 13px;
  background-color: #fff;
  box-shadow: 22px 7px 33px 0 rgba(199, 199, 199, 0.6);
`;

const ProductImage = styled.img`
  border-radius: 13px;
`;

const ProductTitle = styled.h3`
  font-weight: 600;
  font-size: 0.75rem;
  margin-top: 13px;
  margin-bottom: 10px;
`;

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

const ProductButton = styled.button`
  background-color: ${(props) => props.theme.colors.accent};
  color: #fff;
  font-size: 0.5rem;
  padding: 9px 14px;
  border-radius: 7px;
  text-transform: uppercase;
  font-weight: 600;
`;
