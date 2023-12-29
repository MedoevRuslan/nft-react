import React from "react";
import { ContainerImage } from "../ContainerImage";
import Image from "../../assets/images/products/image-1.png";
import ImageRetina from "../../assets/images/products/image-1@2.png";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { Card } from "./Card.styled";
import { ProductImage } from "./ProductImage.styled";
import { ProductTitle } from "./ProductTitle.styled";

export const CardPersonalized = () => {
  return (
    <Card padding={"12px"} borderRadius={"15px"}>
      <ContainerImage width={"163px"} height={"142px"}>
        <ProductImage
          radius={"10px"}
          src={Image}
          srcSet={`${ImageRetina} 2x`}
          alt="product-image"
        />
      </ContainerImage>
      <CardOwner>
        Perperzon
        <Icon iconId={"approved-circle"} width={"12"} viewbox={"0 0 12 12"} />
      </CardOwner>
      <ProductTitle fontSize={"1rem"} margin={"15px 0"}>
        Sun-Glass
      </ProductTitle>
      <ProductInfo>
        <Price>
          <Icon
            iconId={"ephyr"}
            width={"11"}
            height={"16"}
            viewbox={"0 0 16 16"}
          />
          16,4
        </Price>
        <Followers>
          <Icon
            iconId={"heart"}
            width={"11px"}
            height={"10px"}
            viewbox={"0 0 24 24"}
          />
          200
        </Followers>
      </ProductInfo>
    </Card>
  );
};

const CardOwner = styled.span`
  font-size: 0.75rem;
  font-weight: 700;

  & svg {
    margin-left: 5px;
  }
`;

const ProductInfo = styled.span`
  color: #94a3b8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 900;
`;

const Price = styled.div`
  color: ${(props) => props.theme.colors.accent};
  font-size: 1rem;

  svg {
    margin-right: 5px;
  }
`;

const Followers = styled.div`
  color: #888888;
  font-size: 0.75rem;

  svg {
    margin-right: 5px;
  }
`;
