import React, { useState } from "react";
import { Icon } from "../../../components/icon/Icon";
import styled from "styled-components";
import { NotificationsWindow } from "../../../components/notifications/NotificationsWindow";

export const Notifications = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <StyledNotifications>
      <button onClick={() => setShowNotifications(!showNotifications)}>
        <Icon iconId={"bell"}></Icon>
      </button>
      {showNotifications && <NotificationsWindow />}
    </StyledNotifications>
  );
};

const StyledNotifications = styled.div`
  & > button {
    border-radius: 50%;
    padding: 0 10px;
    background-color: #f7f7f7;
    transition: background-color 0.15s ease-in;
    height: 100%;

    &:hover {
      cursor: pointer;
      background-color: #00000011;
    }

    &::after {
      content: "";
      position: absolute;
      top: 10px;
      right: 10px;
      display: block;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      background-color: #ff4747;
      box-shadow: 0 0 0 2px #f2f6ff;
    }

    & > svg {
      fill: none;
    }
  }

  position: relative;
`;
