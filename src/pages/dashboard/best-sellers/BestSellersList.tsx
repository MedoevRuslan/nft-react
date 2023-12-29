import React from "react";
import styled from "styled-components";
import { SellerInfo } from "../SellerInfo";
import AlexCaImg from "../../../../assets/images/products/image-1.png";
import AlexCaRetina from "../../../../assets/images/products/image-1@2.png";
import { BestSeller } from "./BestSeller";

export const BestSellersList = () => {
  return (
    <StyledBestSellersList>
      {[1, 2, 3, 4, 5, 6].map((el) => (
        <BestSeller key={el}>
          <SellerInfo
            sellerInfo={{
              name: "Alex Ca.",
              img: AlexCaImg,
              imgRetina: AlexCaRetina,
              description: "@Alexy",
            }}
            imgWidth={"55px"}
          />
        </BestSeller>
      ))}
    </StyledBestSellersList>
  );
};

const StyledBestSellersList = styled.ol`
  list-style: none;
`;
