import React, { useRef } from "react";
import Image from "../../assets/images/products/Product-page-img.png";
import ImageRetina from "../../assets/images/products/Product-page-img@2x.png";
import styled from "styled-components";
import { CardProps } from "./ProductCard";
import { ContainerImage } from "../ContainerImage";
import { ContainerFlex } from "../ContainerFlex";
import { ProductCreator } from "./ProductCreator";
import { ProductOwner } from "./ProductOwner";
import { Card } from "./Card.styled";
import { ProductImage } from "./ProductImage.styled";
import { ProductTitle } from "./ProductTitle.styled";
import { ProductButton } from "./ProductButton.styled";
import { Icon } from "../icon/Icon";
import { BidNew } from "../bid/BidNew";

export const CardDetails = (props: CardProps) => {
  const ref = useRef<HTMLDialogElement>(null);

  const handleNewBid = () => {
    (ref as any)?.current.showModal();
  };

  return (
    <Card
      as={"section"}
      padding={"32px"}
      borderRadius={"22px"}
      backgroundColor={"#fafafa"}
      boxShadow={"15px 15px 53px 0 rgba(0, 0, 0, 0.12)"}
    >
      <ContainerFlex gap={"120px"} justify={"space-between"}>
        <ContainerImage maxWidth={"490px"} width={"100%"}>
          <ProductImage
            radius={"20px"}
            src={Image}
            srcSet={`${ImageRetina} 2x`}
            alt="product-image"
          />
        </ContainerImage>
        <ProductInfo>
          <ProductTitle
            as={"h2"}
            lineHeight={"1"}
            fontSize={"2.75rem"}
            margin={"0 0 25px"}
            color={"#292b39"}
          >
            Project Sun-Glass
          </ProductTitle>
          <ProductDescription>
            A collection of 10,000 utility-enabled PFPs that feature a richly
            diverse and unique pool of rarity-powered traits.{" "}
          </ProductDescription>
          <UsersInfo>
            <ProductCreator />
            <ProductOwner />
          </UsersInfo>
          <ProductPrice>
            <CuuerrentBid>
              Current bid
              <span>
                <Icon
                  iconId={"ephyr"}
                  width={"19"}
                  height={"31"}
                  viewbox={"0 -3 15 25"}
                />
                1.75
              </span>
            </CuuerrentBid>
            <Estimation>
              End in
              <time>Oct 17, 2022 at 05:08</time>
            </Estimation>
          </ProductPrice>
          <ProductButton
            fontSize={"1rem"}
            fontWeight={"700"}
            radius={"17px"}
            padding={"21px 0"}
            onClick={handleNewBid}
          >
            Place Bid
          </ProductButton>
          <BidNew ref={ref} />
        </ProductInfo>
      </ContainerFlex>
    </Card>
  );
};

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;

  ${ProductButton} {
    margin-top: auto;
    width: 100%;
  }
`;

const ProductDescription = styled.p`
  color: #888888b2;
  font-size: 1rem;
  width: 350px;
  font-weight: 400;
`;

const UsersInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 62px 0 56px;
`;

const ProductPrice = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CuuerrentBid = styled.div`
  display: flex;
  color: #8c8c8c;
  flex-direction: column;

  svg {
    vertical-align: text-top;
    margin-right: 4px;
  }

  span {
    font-weight: 600;
    font-size: 1.75rem;
    color: #292b39;
  }
`;
const Estimation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  color: #8c8c8c;

  time {
    font-size: 1.065rem;
    color: #000;
  }
`;
