import React from "react";
import styled from "styled-components";

export const MoreButton = styled.button`
  width: 3px;
  height: 3px;
  background-color: #cbd5e0;
  border-radius: 50%;
  position: relative;

  &::after,
  &::before {
    position: absolute;
    content: "";
    top: 0;
    display: block;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    background-color: inherit;
  }

  &::after {
    left: -6px;
  }
  &::before {
    left: 6px;
  }
`;
