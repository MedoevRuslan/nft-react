import styled from "styled-components";

type Props = {
  width?: string;
  height?: string;
  backgroundColor?: string;
  radius?: string;
  padding?: string;
};

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props?.width || ""};
  height: ${(props) => props?.height || ""};
  border-radius: ${(props) => props.radius || ""};
  background-color: ${(props) => props.backgroundColor || ""};
  padding: ${(props) => props.padding || ""};
`;
