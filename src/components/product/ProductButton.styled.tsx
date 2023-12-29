import styled from "styled-components";

type Props = {
  fontWeight?: string;
  fontSize?: string;
  padding?: string;
  radius?: string;
  uppercase?: boolean;
};

export const ProductButton = styled.button<Props>`
  background-color: ${(props) => props.theme.colors.accent};
  color: #fff;
  font-size: ${(props) => props?.fontSize || ""};
  padding: ${(props) => props?.padding || ""};
  border-radius: ${(props) => props?.radius || "7px"};
  text-transform: ${(props) => (props?.uppercase ? "uppercase" : "")};
  font-weight: ${(props) => props?.fontWeight || "600"};
  cursor: pointer;
  transition: background-color 0.15s ease-in;

  &:hover {
    background-color: #00000099;
  }
`;
