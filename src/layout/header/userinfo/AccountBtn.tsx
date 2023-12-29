import React from "react";
import styled from "styled-components";
import UserImg from "../../../assets/images/User-image.png";
import { ContainerFlex } from "../../../components/ContainerFlex";
import { Icon } from "../../../components/icon/Icon";
import { Link } from "react-router-dom";

export const AccountBtn = () => {
  return (
    <StyledAccountBtn to={"profile"}>
      <ContainerFlex align={"center"} gap={"12px"}>
        <img src={UserImg} alt="user image" />
        <span>Alesia K.</span>
        <Icon iconId={"chevron-up"} width={"16"} viewbox={"0 0 16 16"} />
      </ContainerFlex>
    </StyledAccountBtn>
  );
};

const StyledAccountBtn = styled(Link)`
  background-color: #f7f7f7;
  padding: 8px;
  border-radius: 22px;
  color: #1a202c;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.15s ease-in;

  &:hover {
    cursor: pointer;
    background-color: #00000011;
  }
`;
