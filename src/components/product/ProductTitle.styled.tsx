import styled from "styled-components";

type Props = {
  margin?: string;
  fontSize: string;
  color?: string;
  lineHeight?: string;
};

export const ProductTitle = styled.h3<Props>`
  font-weight: 600;
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props?.margin || "13px 0 10px"};
  color: ${(props) => props?.color || props.theme.colors.accent};
  line-height: ${(props) => props?.lineHeight || "1.2"};
`;
