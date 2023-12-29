import React from "react";
import styled from "styled-components";
import { SellerInfo } from "../SellerInfo";
import AlexCaImg from "../../../assets/images/products/image-1.png";
import AlexCaRetina from "../../../assets/images/products/image-1@2.png";
import { ContainerFlex } from "../../../components/ContainerFlex";

export const RecentViewedList = () => {
  return (
    <StyledRecentViewedList>
      <RecentSeller>
        <ContainerFlex justify={"space-between"} align={"center"}>
          <SellerInfo
            sellerInfo={{
              name: "Alex Ca.",
              img: AlexCaImg,
              imgRetina: AlexCaRetina,
              description: "Alexy",
            }}
            imgWidth={"48px"}
          />
          <AssetStats trend={"positive"}>
            <span>8,456</span>
            <span>+23,00%</span>
          </AssetStats>
        </ContainerFlex>
      </RecentSeller>
      <RecentSeller>
        <ContainerFlex justify={"space-between"} align={"center"}>
          <SellerInfo
            sellerInfo={{
              name: "Juliya Sa.",
              img: AlexCaImg,
              imgRetina: AlexCaRetina,
              description: "JuliyaS",
            }}
            imgWidth={"48px"}
          />
          <AssetStats trend={"negative"}>
            <span>5,327</span>
            <span>-32,01%</span>
          </AssetStats>
        </ContainerFlex>
      </RecentSeller>
      <RecentSeller />
    </StyledRecentViewedList>
  );
};

const StyledRecentViewedList = styled.ul``;

const RecentSeller = styled.li`
  padding: 4px 0;
  & + li {
    margin-top: 16px;
  }
`;

type AssetStatsPropsType = {
  trend: "positive" | "negative";
};

const AssetStats = styled.div<AssetStatsPropsType>`
  display: flex;
  flex-direction: column;
  align-items: center;

  & span:first-child {
    color: ${(props) => props.theme.colors.accent};
    font-size: 1rem;
    font-weight: 600;
  }

  & span:last-child {
    color: ${(props) => (props.trend === "positive" ? "#10C352" : "#E23333")};
    font-size: 0.875rem;
    font-weight: 400;
  }
`;
