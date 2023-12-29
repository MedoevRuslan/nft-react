import styled from "styled-components";
import React from "react";
import { Notifications } from "./Notifications";
import { AccountBtn } from "./AccountBtn";
import { ContainerFlex } from "../../../components/ContainerFlex";
import { BalanceInfo } from "./BalanceInfo";

export const UserInfo = () => {
  return (
    <StyledUserInfo>
      <div>
        <ContainerFlex gap={"18px"}>
          <BalanceInfo />
          <Notifications />
          <AccountBtn />
        </ContainerFlex>
      </div>
    </StyledUserInfo>
  );
};

const StyledUserInfo = styled.div`
  display: flex;

  & > div {
    height: 48px;
    margin: auto;
  }
`;
