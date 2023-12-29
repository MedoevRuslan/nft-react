import React from "react";
import styled from "styled-components";
import { ProfileFloatingWindow } from "./ProfileFloatingWindow";
import HeroBg from "../../assets/images/Profile-hero.png";
import HeroBgRetina from "../../assets/images/Profile-hero@2x.png";
import { ContainerFlex } from "../../components/ContainerFlex";
import { ProfileStats } from "./ProfileStats";

export const Profile = () => {
  return (
    <StyledProfile>
      <ContainerGrid>
        <Hero />
        <ProfileFloatingWindow />
        <ProfileStats />
      </ContainerGrid>
    </StyledProfile>
  );
};

const StyledProfile = styled.section`
  position: relative;
  margin-top: 75px;
`;
const Hero = styled.div`
  height: 295px;
  width: 100%;
  background-image: url(${HeroBg});
  background-repeat: no-repeat;
  background-size: cover;
  filter: drop-shadow(15px 15px 40px rgba(0, 0, 0, 0.2));
  grid-area: hero;

  @media (min-resolution: 2dppx) {
    background-image: url(${HeroBgRetina});
  }
`;

const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 25px;
  column-gap: 300px;
  grid-template-areas: "hero hero hero" "0 stats stats";
`;
