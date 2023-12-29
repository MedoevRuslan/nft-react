import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { ContainerFlex } from "../../../../components/ContainerFlex";
import { Link, NavLink } from "react-router-dom";

type Props = {
  title: string;
  icon?: string;
  link: string;
  children?: React.ReactNode;
};
export const NavItem = ({ title, icon, link, children }: Props) => {
  return (
    <StyledNavItem role="menuitem">
      <NavbarLink to={link}>
        <ContainerFlex align={"center"} gap={"10px"}>
          {icon && <Icon iconId={icon} width={"20"} viewbox={"0 0 22 22"} />}
          {title}
          {children && (
            <Icon iconId={"chevron-up"} width={"16"} viewbox={"0 0 16 16"} />
          )}
        </ContainerFlex>
        {children}
      </NavbarLink>
    </StyledNavItem>
  );
};

const StyledNavItem = styled.li`
  padding: 13px 15px;
  color: #718096;
  font-size: 0.875rem;
  font-family: Manrope, sans-serif;
  font-weight: 500;
  cursor: pointer;
  border-radius: 12px;
  transition: background-color 0.2s ease-in;

  &:has(.active) {
    background-color: ${(props) => props.theme.colors.accent};
    color: #fefefe;

    &:hover {
      background-color: ${(props) => props.theme.colors.accent};
    }
  }

  &:hover {
    background-color: #71809611;
  }

  a {
    color: inherit;
  }

  svg + svg {
    margin-left: auto;
  }
`;

const NavbarLink = styled(NavLink)``;
