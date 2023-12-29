import styled from "styled-components";

export const ShopLink = styled.a`
  color: ${(props) => props.theme.colors.grey.dark};
  font-weight: 500;
  transition: color 0.15s ease-in;
  &:hover {
    color: ${(props) => props.theme.colors.accent};
  }
`;
