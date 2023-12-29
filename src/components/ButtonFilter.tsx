import React from "react";
import styled from "styled-components";

export const ButtonFilter = styled.button`
  padding: 15px;
  border-radius: 12px;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.accent};
  cursor: pointer;
  font-family: Manrope, sans-serif;
  font-weight: 600;
  font-size: 0.875rem;

  svg {
    transition: fill 0.15s ease-in;
  }

  &:hover svg {
    fill: #ff000099;
  }
`;
