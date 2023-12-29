import React from "react";
import styled from "styled-components";
import { ContainerFlex } from "../ContainerFlex";
import { Container } from "../Container";
import BidImage from "../../assets/images/products/image-4.png";
import BidImageRetina from "../../assets/images/products/image-4@2.png";
import { StyledNotification } from "./StyledNotification";
import { NotificationContent } from "./NotificationContent";

export const NotificationBid = () => {
  return (
    <StyledNotification>
      <ContainerFlex justify={"space-between"} align={"center"}>
        <Container>
          <NotificationAvatar
            src={BidImage}
            srcSet={`${BidImageRetina} 2x`}
            alt="new bid"
          />
        </Container>
        <NotificationContent>
          <ContainerFlex direction={"column"}>
            <header>
              <h3>
                <span>New bid</span> Space shippasdasfasfasf
              </h3>
            </header>
            <p>
              <span>0.002 ETH</span>
            </p>
            <time>7 Oct 2022, 10:30 PM</time>
          </ContainerFlex>
        </NotificationContent>
        <NotificationAssetImg
          src={BidImage}
          srcSet={`${BidImageRetina} 2x`}
          alt="asset image"
        />
      </ContainerFlex>
    </StyledNotification>
  );
};

const NotificationAvatar = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 36px;
`;

const NotificationAssetImg = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 11px;
`;
