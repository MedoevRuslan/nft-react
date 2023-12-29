import React, { FC, useState } from "react";
import styled from "styled-components";
import { ContainerFlex } from "../../../components/ContainerFlex";
import { ButtonOutlined } from "../../../components/ButtonOutlined";

type BestSellerPropsType = {
  children: React.ReactNode;
};

export const BestSeller: FC<BestSellerPropsType> = ({ children }) => {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <StyledBestSeller>
      <ContainerFlex justify={"space-between"} align={"center"}>
        {children}
        <ButtonOutlined
          active={isFollowed}
          onClick={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </ButtonOutlined>
      </ContainerFlex>
    </StyledBestSeller>
  );
};

const StyledBestSeller = styled.li`
  padding: 4px 0;
  & + li {
    margin-top: 16px;
  }
`;
