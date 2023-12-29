import React from "react";
import styled from "styled-components";
import { ContainerFlex } from "./ContainerFlex";
import { ButtonFilter } from "./ButtonFilter";
import { Icon } from "./icon/Icon";

export const ProductFilter = () => {
  return (
    <StyledProductFilter>
      <ContainerFlex gap={"30px"}>
        <ButtonFilter>
          <Icon
            iconId={"list"}
            width={"18"}
            height={"20"}
            viewbox={"2 2 21 21"}
          />
          Category
        </ButtonFilter>
        <ButtonFilter>
          <Icon
            iconId={"collection-voice"}
            width={"20"}
            height={"20"}
            viewbox={"2 2 21 21"}
          />
          Collection
        </ButtonFilter>
        <ButtonFilter>
          <Icon
            iconId={"dollar"}
            width={"20"}
            height={"20"}
            viewbox={"2 2 21 21"}
          />
          Price
        </ButtonFilter>
      </ContainerFlex>
    </StyledProductFilter>
  );
};

const StyledProductFilter = styled.div`
  margin: 40px 0 72px;
  svg {
    transition: fill 0.15 s ease-in;
    vertical-align: text-bottom;
    margin-right: 10px;
  }
`;
