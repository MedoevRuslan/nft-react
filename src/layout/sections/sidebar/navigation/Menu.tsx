import React from "react";
import styled from "styled-components";

const navItems = ["Dashboard"];

export const Navigation = () => {
  return (
    <StyledNavigation role="menubar">
      <ul>
        <li role="menuitem">
          <a href="">Dashboard</a>
        </li>
        <li role="menuitem">
          <a href="">Market</a>
        </li>
        <li role="menuitem">
          <a href="">Messages</a>
        </li>
        <li role="menuitem">
          <a href="">My Wallets</a>
        </li>
        <li role="menuitem">
          <a href="">Activity</a>
          <ul>
            <li>
              <a href="">Active Bids</a>
            </li>
            <li>
              <a href="">Collection</a>
            </li>
          </ul>
        </li>
        <li role="menuitem">
          <a href="">Get Help</a>
        </li>
        <li role="menuitem">
          <a href="">Settings</a>
        </li>
      </ul>
    </StyledNavigation>
  );
};

const StyledNavigation = styled.nav`
  ul li:nth-last-child(2) {
    margin-top: auto;
  }
`;
