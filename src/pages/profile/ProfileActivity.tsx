import React from "react";
import styled from "styled-components";
import { ContainerFlex } from "../../components/ContainerFlex";
import { Icon } from "../../components/icon/Icon";
import { ActiveItem } from "./ActiveItem";

export const ProfileActivity = () => {
  return (
    <StyledProfileActivity>
      <ActivityTabs>
        <ContainerFlex justify={"space-between"} align={"center"} gap={"17px"}>
          <ActivityTab>
            <Icon iconId={"cart"} width={"20"} viewbox={"0 0 20 20"} />
            Sales
            <Icon
              iconId={"chevron-up"}
              width={"15"}
              height={"20"}
              viewbox={"0 0 15 15"}
            />
          </ActivityTab>
          <ActivityTab>
            <Icon iconId={"chains"} width={"22"} viewbox={"0 0 23 20"} />
            All Chains
            <Icon
              iconId={"chevron-up"}
              width={"15"}
              height={"20"}
              viewbox={"0 0 15 15"}
            />
          </ActivityTab>
        </ContainerFlex>
      </ActivityTabs>
      <ContainerFlex direction={"column"} gap={"30px"}>
        <ActiveItem />
        <ActiveItem />
      </ContainerFlex>
    </StyledProfileActivity>
  );
};

const StyledProfileActivity = styled.section``;
const ActivityTabs = styled.div`
  margin-bottom: 56px;
`;
const ActivityTab = styled.button`
  display: flex;
  gap: 10px;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  padding: 14px 0;
  cursor: pointer;

  font-weight: 400;
  font-size: 1rem;

  border-radius: 9px;
  background: #fff;
  box-shadow: 18px 12px 61px 0 rgba(97, 97, 97, 0.25);
  transition:
    box-shadow 0.3s ease-in,
    transform 0.2s ease-in;

  &:hover {
    box-shadow: 13px 9px 30px 0 rgba(130, 130, 130, 0.15);
    transform: translateY(-2%);
  }

  &:last-child {
    z-index: 1;
  }
`;
