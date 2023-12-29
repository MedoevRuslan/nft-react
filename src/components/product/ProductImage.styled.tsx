import styled from "styled-components";

export const ProductImage = styled.img<{ radius?: string }>`
  border-radius: ${(props) => props?.radius || ""};
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
