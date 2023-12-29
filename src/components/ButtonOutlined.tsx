import styled from "styled-components";

export const ButtonOutlined = styled.button<{ active?: boolean }>`
  border: 2px solid #e6e8ec;
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: 600;
  font-size: 0.875rem;
  font-family: Poppins, sans-serif;
  background-color: ${(props) => (props.active ? "#E6E8EC" : "transparent")};
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: ${(props) => (props.active ? "#00000022" : "#E6E8EC33")};
  }
`;
