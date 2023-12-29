import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import styled from "styled-components";
import { ShopLink } from "../ShopLink";
import { ContainerFlex } from "../../../components/ContainerFlex";
import { Collection } from "../../../components/collection/Collection";

export const TopCollection = () => {
  return (
    <StyledTopCollection>
      <ContainerFlex justify={"space-between"} align={"center"}>
        <SectionTitle size={"1.5625rem"}>Top Collection</SectionTitle>
        <ShopLink href="">View All</ShopLink>
      </ContainerFlex>
      <Collection />
    </StyledTopCollection>
  );
};

const StyledTopCollection = styled.section`
  & > ${ContainerFlex} {
    margin-bottom: 30px;
  }
`;
