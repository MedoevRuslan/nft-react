import React from "react";
import styled from "styled-components";
import { SellerInfo } from "./SellerInfo";
import SellerImg from "../../../assets/images/products/image-1.png";
import SellerImageRetina from "../../../assets/images/products/image-1@2.png";

export const Seller = () => {
  return (
    <StyledSeller>
      <SellerInfo
        sellerInfo={{
          name: "Alex Ca.",
          img: SellerImg,
          imgRetina: SellerImageRetina,
          description: "By Alex",
        }}
        imgWidth={"48px"}
      />
      <button>Follow</button>
    </StyledSeller>
  );
};

const StyledSeller = styled.li``;
