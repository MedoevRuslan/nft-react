import styled from "styled-components";

type Props = {
  padding?: string;
  borderRadius?: string;
  backgroundColor?: string;
  boxShadow?: string;
};

export const Card = styled.li<Props>`
  padding: ${(props) => props?.padding || ""};
  border-radius: ${(props) => props?.borderRadius || ""};
  background-color: ${(props) => props?.backgroundColor || "#fff"};
  box-shadow: ${(props) =>
    props?.boxShadow || "22px 7px 33px 0 rgba(199, 199, 199, 0.6)"};
`;
