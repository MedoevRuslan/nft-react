import React, { useState } from "react";
import styled from "styled-components";
import { ContainerFlex } from "../../components/ContainerFlex";
import { Icon } from "../../components/icon/Icon";
import { ProfileCollection } from "./ProfileCollection";
import { ProfileActivity } from "./ProfileActivity";

export const ProfileStats = () => {
  const [activeNav, setActiveNav] = useState<"collection" | "activity">(
    "collection",
  );

  return (
    <StyledProfileStats>
      <StatsNavigation active={activeNav}>
        <ContainerFlex justify={"space-between"} align={"center"}>
          <StatsNavItem
            onClick={() => setActiveNav("collection")}
            active={activeNav === "collection"}
          >
            <Icon
              iconId={"collection"}
              width={"23"}
              height={"22"}
              viewbox={"0 0 23 22"}
            />
            Collection
          </StatsNavItem>
          <StatsNavItem
            onClick={() => setActiveNav("activity")}
            active={activeNav === "activity"}
          >
            <Icon iconId={"activity"} width={"20"} viewbox={"0 0 20 20"} />
            Activity
          </StatsNavItem>
        </ContainerFlex>
      </StatsNavigation>
      {activeNav === "collection" && <ProfileCollection />}
      {activeNav === "activity" && <ProfileActivity />}
    </StyledProfileStats>
  );
};

const StyledProfileStats = styled.section`
  grid-area: stats;
`;
const StatsNavigation = styled.div<{ active: string }>`
  width: 100%;
  text-align: center;
  padding: 14px 0;
  position: relative;
  margin-bottom: 40px;

  &::after {
    position: absolute;
    content: "";
    display: block;
    width: 50%;
    bottom: 0;
    left: ${(props) => (props.active === "collection" ? "0" : "50%")};
    height: 3px;
    background-color: #000;
    border-radius: 3px;
    transition: left 0.2s ease-in-out;
  }
`;

const StatsNavItem = styled.span<{ active: boolean }>`
  color: ${(props) => (props.active ? props.theme.colors.accent : "#D2D2D2")};
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
`;
