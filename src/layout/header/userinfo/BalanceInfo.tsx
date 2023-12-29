import React from "react";
import { Icon } from "../../../components/icon/Icon";
import styled from "styled-components";

export const BalanceInfo = () => {
  return (
    <StyledBalanceInfo>
      <Icon iconId={"ephyr"} width={"13"} height={"20"} viewbox={"0 0 13 20"} />
      <span>3.06 ETH</span>
    </StyledBalanceInfo>
  );
};

const StyledBalanceInfo = styled.div`
  padding: 15px 11px;
  border-radius: 8px;
  background-color: #f7f7f7;
  font-size: 0.75rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;
