import React from "react";
import styled from "styled-components";

type ImageContainerProps = {
  width: string;
  height?: string;
  maxWidth?: string;
};
export const ContainerImage = styled.div<ImageContainerProps>`
  width: ${(props) => props.width};
  height: ${(props) => props?.height ?? "auto"};
  max-width: ${(props) => props?.maxWidth ?? ""};
`;
