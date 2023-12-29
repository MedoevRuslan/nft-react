import styled from "styled-components";
import { Container } from "../Container";
import { ButtonOutlined } from "../ButtonOutlined";

export const StyledNotification = styled.article`
  color: ${(props) => props.theme.colors.accent};
  padding: 12px 12px 12px 32px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 20px 30px 0 rgba(70, 70, 70, 0.1);

  ${Container} {
    align-self: start;
    position: relative;

    &::before {
      position: absolute;
      top: 50%;
      left: -20px;
      transform: translateY(-50%);
      content: "";
      display: block;
      width: 8px;
      height: 8px;
      background-color: ${(props) => props.theme.colors.accent};
      border-radius: 50%;
    }
  }

  h3 {
    font-size: 0.875rem;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    span {
      color: #949494;
    }
  }

  p,
  time {
    font-size: 0.75rem;
    font-weight: 400;
    color: #949494;
  }

  p > span {
    font-weight: 600;
    color: ${(props) => props.theme.colors.accent};
  }

  ${ButtonOutlined} {
    align-self: start;
    color: ${(props) => props.theme.colors.accent};
    font-family:
      DM Sans,
      sans-serif;
    font-size: 0.875rem;
    font-weight: 700;
  }
`;
