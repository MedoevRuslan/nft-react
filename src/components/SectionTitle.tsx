import styled from "styled-components";

type SectionTitlePropsType = {
  size: `${number}${"rem" | "px"}`;
};
export const SectionTitle = styled.h1<SectionTitlePropsType>`
  font-size: ${(props) => props.size};
  font-weight: 600;
  color: ${(props) => props.theme.colors.accent};
`;
