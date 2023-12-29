import styled, { css } from "styled-components";

type HeroButtonPropsType = {
  width?: string;
  variant: "primary" | "secondary";
};

export const HeroButton = styled.a<HeroButtonPropsType>`
  font-family: "Outfit", serif;
  display: block;
  font-size: 0.875rem;
  border-radius: 8px;
  border: 1px solid #fff;
  padding: 0.928em 1.214em;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.15s ease-in;

  &:hover {
    background-color: ${(props) =>
      props.variant === "primary" ? "#ffffffdd" : "#ffffff22"};
  }

  color: ${(props) => (props.variant === "primary" ? "#141416" : "#fff")};
  background-color: ${(props) =>
    props.variant === "primary" ? "#fff" : "transparent"};
  width: ${(props) => props?.width || ""};
`;
