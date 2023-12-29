import styled, { CSSProp } from "styled-components";

type FlexContainerProps = {
  direction?: "row" | "column";
  wrap?: boolean;
  gap?: string;
  justify?: string;
  align?: string;
};

export const ContainerFlex = styled.div<FlexContainerProps>`
  display: flex;
  height: 100%;
  flex-direction: ${(props) => props.direction || "row"};
  flex-wrap: ${(props) => (props?.wrap ? "wrap" : "nowrap")};
  gap: ${(props) => props?.gap || "0"};
  justify-content: ${(props) => props?.justify || "flex-start"};
  align-items: ${(props) => props?.align || "stretch"};
`;
