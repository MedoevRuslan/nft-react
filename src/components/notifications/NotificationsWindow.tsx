import React from "react";
import styled from "styled-components";
import { ContainerFlex } from "../ContainerFlex";
import { Icon } from "../icon/Icon";
import { NotificationBid } from "./NotificationBid";
import { NotificationIncome } from "./NotificationIncome";

export const NotificationsWindow = () => {
  return (
    <StyledNotifications>
      <ContainerFlex direction={"column"}>
        <NotificationsHeader>
          <ContainerFlex justify={"space-between"} align={"center"}>
            <h2>Notifications</h2>
            <button>
              <Icon
                iconId={"double-check"}
                width={"20"}
                viewbox={"0 0 20 20"}
              />
              Mark all as read
            </button>
          </ContainerFlex>
        </NotificationsHeader>
        <NotificationList>
          <ContainerFlex direction={"column"} gap={"18px"}>
            <NotificationBid />
            <NotificationIncome />
          </ContainerFlex>
        </NotificationList>
        <NotificationsFooter>
          <ContainerFlex justify={"space-between"}>
            <span>See all notifications</span>
            <Icon iconId={"settings"} width={"24"} viewbox={"0 0 24 24"} />
          </ContainerFlex>
        </NotificationsFooter>
      </ContainerFlex>
    </StyledNotifications>
  );
};

const StyledNotifications = styled.div`
  width: 396px;
  height: 704px;
  //padding: 24px;
  border-radius: 25px;
  background: #fefefe;
  box-shadow: 6px 10px 30px 1px rgba(108, 95, 188, 0.12);
  position: absolute;
  z-index: 10;
  right: 24px;
  top: 27px;
`;

const NotificationsHeader = styled.header`
  padding: 24px 24px 14px;

  h2 {
    font-size: 1.125rem;
    font-weight: 600;
  }

  button {
    font-family: "Manrope", sans-serif;
    font-size: 0.875rem;
    font-weight: 800;
    line-height: 1.5;
    cursor: pointer;

    svg {
      vertical-align: bottom;
      margin-right: 3px;
    }
  }
`;

const NotificationsFooter = styled.footer`
  margin-top: auto;
  padding: 24px;
  font-weight: 600;
  font-size: 0.875rem;

  ${ContainerFlex} {
    cursor: pointer;
  }

  svg {
    color: #718096;
  }
`;

const NotificationList = styled.div`
  padding: 24px;
  border-width: 1px 0 1px;
  border-style: solid;
  border-color: #ebebeb;
  flex-grow: 1;
`;
