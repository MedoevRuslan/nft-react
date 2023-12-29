import React from "react";
import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import { ContainerFlex } from "../../../components/ContainerFlex";
import IconsSprite from "../../../assets/images/icons-sprite.svg";

export const Search = () => {
  return (
    <StyledSearch>
      <ContainerFlex justify={"space-between"} gap={"15px"}>
        <SearchInput>
          <Icon iconId={"search-icon"} width={"29"} viewbox={"0 0 29 33"} />
          <input type="search" placeholder="Search" />
        </SearchInput>
        <button type={"submit"}>
          <Icon
            width={"22"}
            height={"26"}
            viewbox={"0 0 22 26"}
            iconId={"search-btn"}
          />
        </button>
      </ContainerFlex>
    </StyledSearch>
  );
};

const StyledSearch = styled.div`
  max-width: 715px;
  width: 100%;

  button {
    background-color: #141416;
    padding: 19px 21px;
    border-radius: 18px;
    transition: background-color 0.15s ease-in;

    &:hover {
      background-color: #000000aa;
      cursor: pointer;
    }
  }
`;

const SearchInput = styled.div`
  max-width: 100%;
  width: 100%;
  position: relative;
  color: #acadb9;

  & > svg {
    position: absolute;
    left: 18px;
    top: 50%;
    transform: translateY(-50%);
  }

  &:hover > svg {
    animation: input-hover 0.5s ease-in-out;
  }

  input {
    width: 100%;
    font-size: 1.1875rem;
    color: #acadb9;
    padding: 22px 65px;
    border: none;
    background-color: #f5f5f5;
    border-radius: 18px;

    &:focus {
      outline: 1px solid #acadb9;
    }

    &::placeholder {
      color: #acadb9;
    }
  }

  @keyframes input-hover {
    0%,
    100% {
      color: #acadb9;
    }
    50% {
      color: #ccc;
    }
  }
`;
