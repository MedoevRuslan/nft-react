import React from "react";
import styled from "styled-components";
import HeroBG from "../../../assets/images/Hero-bg.png";
import { HeroButton } from "./HeroButton";
import { ContainerFlex } from "../../../components/ContainerFlex";

export const Hero = () => {
  return (
    <StyledHero>
      <HeroTitle>Create and Sell NFTs</HeroTitle>
      <HeroSubtitle>World’s Largest NFT Place</HeroSubtitle>
      <ContainerFlex gap={"20px"}>
        <HeroButton variant={"primary"} width={"122px"}>
          Explore More
        </HeroButton>
        <HeroButton variant={"secondary"} width={"122px"}>
          Sell Artwork
        </HeroButton>
      </ContainerFlex>
    </StyledHero>
  );
};

const StyledHero = styled.div`
  background:
    linear-gradient(to right, rgba(20, 20, 22, 1) 50%, rgba(20, 20, 22, 0.35)),
    no-repeat right url(${HeroBG});
  padding: 30px;
  border-radius: 25px;
  margin-bottom: 46px;
`;

const HeroTitle = styled.h1`
  font-size: 1.875rem;
  font-weight: 600;
  color: #fff;
`;

const HeroSubtitle = styled.h2`
  font-size: 0.875rem;
  color: #d4d4d4;
  font-weight: 500;
  margin-bottom: 25px;
`;
