import React, { useRef } from "react";
import styled from "styled-components";
import { BidItem } from "./BidItem";
import { ProductButton } from "../product/ProductButton.styled";
import Chevron from "../../assets/images/chevron-down.svg";
import { SectionTitle } from "../SectionTitle";

export const BidNew = React.forwardRef<HTMLDialogElement>((props, ref) => {
  const handleCloseDialog = (event: React.MouseEvent) => {
    if ((event.target as Element).id === "dialog") {
      (ref as any)?.current.close();
    }
  };

  return (
    <StyledBidNew id={"dialog"} ref={ref} onClick={handleCloseDialog}>
      <div>
        <header>
          <h3>History of Bid</h3>
          <time>Oct 14, 2022</time>
        </header>
        <BidHistoryList>
          <BidItem />
          <BidItem />
          <BidItem />
        </BidHistoryList>
        <span>Your Bid</span>
        <form method={"dialog"}>
          <StyledInput>
            <select>
              <option value="eth">ETH</option>
              <option value="eth2">ETH2</option>
              <option value="eth3">ETH3</option>
            </select>
            <input type="text" placeholder={"Minimal Submit 1.56 ETH"} />
          </StyledInput>
          <ProductButton
            fontSize={"1rem"}
            fontWeight={"700"}
            radius={"17px"}
            padding={"18px 0"}
            type={"submit"}
          >
            Submit
          </ProductButton>
        </form>
      </div>
    </StyledBidNew>
  );
});

const StyledBidNew = styled.dialog`
  left: calc(50% + 125px);
  top: 50%;
  border-radius: 25px;
  border: 2px solid #000;
  padding: 42px 0 38px;
  transform: translate(-50%, -50%);

  & > div > span {
    padding: 0 24px;
    font-size: 1.1875rem;
    font-weight: 600;
  }

  form {
    margin-top: 12px;
    padding: 0 24px;
  }

  header {
    padding: 0 24px;
    h3 {
      font-size: 1.1875rem;
    }

    time {
      color: #888888;
      font-size: 0.875rem;
    }
  }

  &::backdrop {
    left: 250px;
    background: rgba(239, 239, 239, 0.25);
    backdrop-filter: blur(12px);
  }
`;

const StyledInput = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid;
  border-radius: 16px;
  border-color: ${(props) => props.theme.colors.accent};
  margin-bottom: 12px;
  position: relative;

  &::after {
    position: absolute;
    display: block;
    content: "";
    background: url(${Chevron}) no-repeat;
    width: 15px;
    height: 8px;
    left: 100px;
    top: 50%;
    transform: translateY(-50%);
  }

  select {
    font-family: Poppins, sans-serif;
    border: none;
    flex-grow: 1;
    outline: none;
    padding: 0 44px;
    border-radius: 16px 0 0 16px;
    font-weight: 900;
    font-size: 1.1875rem;
    color: #fff;
    background-color: ${(props) => props.theme.colors.accent};
    appearance: none;
  }

  input {
    flex-grow: 2;
    border: none;
    outline: none;
    padding: 18px 5px 18px 44px;
    border-radius: inherit;
    font-size: 1.1875rem;
    font-weight: 900;

    &::placeholder {
      font-weight: 400;
      font-size: 0.625rem;
      color: #b2b0b0;
    }
  }
`;
const BidHistoryList = styled.ul`
  padding: 17px 24px 42px;
  height: 400px;
  overflow-y: scroll;
  position: relative;

  mask-image: linear-gradient(
    to bottom,
    transparent,
    #000 32px,
    #000 292px,
    transparent
  );

  mask-repeat: no-repeat, no-repeat;

  li + li {
    margin-top: 18px;
  }
`;
