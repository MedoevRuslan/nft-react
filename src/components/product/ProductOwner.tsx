import React from "react";
import { ContainerFlex } from "../ContainerFlex";
import { ContainerImage } from "../ContainerImage";
import AvatarImg from "../../assets/images/user-avatar-2.png";
import AvatarImgRetina from "../../assets/images/user-avatar-2@2x.png";
import styled from "styled-components";

export const ProductOwner = () => {
  return (
    <StyledProductOwner>
      <ContainerFlex align={"center"}>
        <ContainerImage width={"57px"}>
          <Avatar
            src={AvatarImg}
            srcSet={`${AvatarImgRetina} 2x`}
            alt={"user avatar"}
          />
        </ContainerImage>
        <CreatorInfo>
          Owned by<span>Videz</span>
        </CreatorInfo>
      </ContainerFlex>
    </StyledProductOwner>
  );
};

const StyledProductOwner = styled.div``;

const Avatar = styled.img`
  border-radius: 50%;
`;

const CreatorInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  font-size: 1rem;
  color: #8d8d8d;

  span {
    font-size: 1.375rem;
    font-weight: 500;
    color: #000;
  }
`;
