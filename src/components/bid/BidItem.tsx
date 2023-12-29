import React from "react";
import styled from "styled-components";
import { ContainerImage } from "../ContainerImage";
import { Icon } from "../icon/Icon";
import BidImage from "../../assets/images/products/image-2.png";
import BidImageRetina from "../../assets/images/products/image-2@2.png";
import { ContainerFlex } from "../ContainerFlex";
import CheckedCircle from "../../assets/images/checked-circle.svg";

export const BidItem = () => {
  return (
    <StyledBidItem>
      <ContainerFlex gap={"15px"} align={"center"}>
        <ContainerImage width={"60px"} height={"60px"}>
          <img src={BidImage} srcSet={`${BidImageRetina} 2x`} alt="bid image" />
        </ContainerImage>
        <BidOwner>
          <span>Repo</span>
          <time>May 17, 2022 at 12:08</time>
        </BidOwner>
        <Price>
          <Icon
            iconId={"ephyr"}
            width={"12"}
            height={"20"}
            viewbox={"0 0 13 20"}
          />
          1.55
        </Price>
      </ContainerFlex>
    </StyledBidItem>
  );
};

const StyledBidItem = styled.li`
  padding: 17px 45px 17px 17px;
  border-radius: 10px;
  background: #fff;
  box-shadow: -5px 11px 19px 0 rgba(16, 16, 16, 0.15);

  ${ContainerImage} {
    position: relative;

    &::before {
      position: absolute;
      display: block;
      content: "";
      background-color: #fff;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      top: -1.7px;
      right: -1.8px;
    }

    &::after {
      position: absolute;
      display: block;
      content: "";
      background: url(${CheckedCircle}) no-repeat;
      width: 17px;
      height: 17px;
      top: 0;
      right: 0;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }
`;

const BidOwner = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 500;

  time {
    color: #9c9c9c;
    font-size: 0.875rem;
  }
`;

const Price = styled.span`
  margin-left: auto;
  font-size: 1.25rem;
  font-weight: 500;

  svg {
    position: relative;
    top: 2px;
    right: 5px;
  }
`;
