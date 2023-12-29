import React from "react";
import { SectionTitle } from "../../../../components/SectionTitle";
import styled from "styled-components";
import { ShopLink } from "../ShopLink";
import { FlexContainer } from "../../../../components/FlexContainer";
import { Collection } from "../../../../components/collection/Collection";

export const TopCollection = () => {
  return (
    <StyledTopCollection>
      <FlexContainer justify={"space-between"} align={"center"}>
        <SectionTitle size={"1.5625rem"}>Top Collection</SectionTitle>
        <ShopLink href="">View All</ShopLink>
      </FlexContainer>
      <Collection />
    </StyledTopCollection>
  );
};

const StyledTopCollection = styled.section`
  & > ${FlexContainer} {
    margin-bottom: 30px;
  }
`;
