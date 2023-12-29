import React, { FC } from "react";
import { ContainerFlex } from "../../components/ContainerFlex";
import styled from "styled-components";
import { ContainerImage } from "../../components/ContainerImage";

type SellerInfoProsType = {
  sellerInfo: {
    img: string;
    imgRetina?: string;
    name: string;
    description: string;
  };
  imgWidth: string;
};

export const SellerInfo: FC<SellerInfoProsType> = ({
  sellerInfo,
  imgWidth,
}) => {
  return (
    <ContainerFlex gap={"14px"}>
      <ContainerImage width={imgWidth}>
        <SellerImage
          src={sellerInfo.img}
          srcSet={`${sellerInfo?.imgRetina} 2x`}
          alt={`user-image-for-${SellerInfo.name}`}
        />
      </ContainerImage>
      <SellerName>
        <h4>{sellerInfo.name}</h4>
        <span>{sellerInfo.description}</span>
      </SellerName>
    </ContainerFlex>
  );
};

const SellerImage = styled.img`
  border-radius: 50%;
  border: 2px solid #fff;
  max-width: 100%;
  display: block;
`;

const SellerName = styled.div`
  h4 {
    font-weight: 500;
    color: ${(props) => props.theme.colors.accent};
  }

  span {
    color: #64748b;
    font-weight: 400;
    font-size: 0.8125rem;
  }
`;
