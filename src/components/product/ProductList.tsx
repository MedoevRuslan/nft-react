import React from "react";
import styled from "styled-components";
import { CardType, ProductCard } from "./ProductCard";
import { generateArray } from "../../utils/array";
import { Link } from "react-router-dom";

type Props = {
  show?: number;
  cardType: CardType;
  children?: React.ReactNode;
};

export const ProductList = ({ show, cardType, children }: Props) => {
  if (children) {
    return <>{children}</>;
  }

  return (
    <StyledProductList>
      {generateArray(show || 1).map((product) => (
        <Link to={`/market/${product}`}>
          <ProductCard cardType={cardType} />
        </Link>
      ))}
    </StyledProductList>
  );
};

const StyledProductList = styled.ul`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;

  & li:last-child {
    margin-right: auto;
  }
`;
