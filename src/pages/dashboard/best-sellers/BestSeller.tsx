import React, { FC, useState } from "react";
import styled from "styled-components";
import { FlexContainer } from "../../../../components/FlexContainer";

type BestSellerPropsType = {
  children: React.ReactNode;
};

export const BestSeller: FC<BestSellerPropsType> = ({ children }) => {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <StyledBestSeller>
      <FlexContainer justify={"space-between"} align={"center"}>
        {children}
        <FollowButton
          isFollowed={isFollowed}
          onClick={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </FollowButton>
      </FlexContainer>
    </StyledBestSeller>
  );
};

const StyledBestSeller = styled.li`
  padding: 4px 0;
  & + li {
    margin-top: 16px;
  }
`;

const FollowButton = styled.button<{ isFollowed: boolean }>`
  border: 2px solid #e6e8ec;
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: 600;
  font-size: 0.875rem;
  font-family: Poppins, sans-serif;
  background-color: ${(props) =>
    props.isFollowed ? "#E6E8EC" : "transparent"};
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: ${(props) =>
      props.isFollowed ? "#00000022" : "#E6E8EC33"};
  }
`;
