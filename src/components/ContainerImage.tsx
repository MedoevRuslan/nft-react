import React from "react";
import styled from "styled-components";

type ImageContainerProps = {
  width: string;
  height?: string;
};
export const ImageContainer = styled.div<ImageContainerProps>`
  width: ${(props) => props.width};
  height: ${(props) => props?.height ?? "auto"};
`;
