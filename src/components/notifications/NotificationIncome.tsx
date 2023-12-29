import React from "react";
import styled from "styled-components";
import { ContainerFlex } from "../ContainerFlex";
import { Icon } from "../icon/Icon";
import { ButtonOutlined } from "../ButtonOutlined";
import { Container } from "../Container";
import { StyledNotification } from "./StyledNotification";
import { NotificationContent } from "./NotificationContent";

export const NotificationIncome = () => {
  return (
    <StyledNotification>
      <ContainerFlex justify={"space-between"} align={"center"} gap={"12px"}>
        <Container backgroundColor={"#E6E8EC"} padding={"12px"} radius={"50%"}>
          <Icon iconId={"add-balance"} width={"24"} viewbox={"0 0 24 24"} />
        </Container>
        <NotificationContent>
          <ContainerFlex direction={"column"}>
            <header>
              <h3>ETH received</h3>
            </header>
            <p>
              <span>1.25 ETH</span> received
            </p>
            <time>9 Oct 2022, 11:30 PM</time>
          </ContainerFlex>
        </NotificationContent>
        <ButtonOutlined>My Balance</ButtonOutlined>
      </ContainerFlex>
    </StyledNotification>
  );
};
