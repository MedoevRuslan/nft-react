import React from "react";
import styled from "styled-components";
import { NavItem } from "./NavItem";
import { ContainerFlex } from "../../../../components/ContainerFlex";

const navItems = ["Dashboard"];

export const Menu = () => {
  return (
    <StyledMenu role="menubar">
      <ContainerFlex direction={"column"} justify={"space-between"}>
        <MainNavigation>
          <NavItem link={"dashboard"} title={"Dashboard"} icon={"dashboard"} />
          <NavItem link={"market"} title={"Market"} icon={"market"} />
          <NavItem link={"messages"} title={"Messages"} icon={"messages"} />
          <NavItem
            link={"my-wallets"}
            title={"My Wallets"}
            icon={"my-wallets"}
          />
          <NavItem link={"activity"} title={"Activity"} icon={"activity"}>
            <SubNavigation>
              <NavItem link={"active-bids"} title={"Active Bids"} />
              <NavItem link={"collection"} title={"Collection"} />
            </SubNavigation>
          </NavItem>
        </MainNavigation>
        <ServiceNavigation>
          <NavItem link={"settings"} title={"Get Help"} icon={"settings"} />
          <NavItem link={"help"} title={"Settings"} icon={"help"} />
        </ServiceNavigation>
      </ContainerFlex>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  height: 100%;
`;

const MainNavigation = styled.ul``;
const SubNavigation = styled.ul`
  //display: none;
`;
const ServiceNavigation = styled.ul``;
