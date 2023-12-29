import React, { FC } from "react";
import { FlexContainer } from "../../../components/FlexContainer";
import styled from "styled-components";
import { ImageContainer } from "../../../components/ImageContainer";

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
    <FlexContainer gap={"14px"}>
      <ImageContainer width={imgWidth}>
        <SellerImage
          src={sellerInfo.img}
          srcSet={`${sellerInfo?.imgRetina} 2x`}
          alt={`user-image-for-${SellerInfo.name}`}
        />
      </ImageContainer>
      <SellerName>
        <h4>{sellerInfo.name}</h4>
        <span>{sellerInfo.description}</span>
      </SellerName>
    </FlexContainer>
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
