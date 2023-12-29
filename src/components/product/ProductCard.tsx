import React from "react";
import styled from "styled-components";
import Image from "../../assets/images/products/image-1.png";
import ImageRetina from "../../assets/images/products/image-1@2.png";
import { CardTrending } from "./CardTrending";
import { CardMarket } from "./CardMarket";
import { CardPersonalized } from "./CardPersonalized";
import { CardDetails } from "./CardDetails";

export type CardType = "market" | "trending" | "person" | "details";

export type CardProps = {
  img?: string[];
  title?: string;
  price?: number;
  description?: string;
  cardType: CardType;
};

export const ProductCard = (props: CardProps) => {
  return getProductCard(props);
};

const getProductCard = (props: CardProps) => {
  switch (props.cardType) {
    case "market":
      return <CardMarket />;
    case "person":
      return <CardPersonalized />;
    case "trending":
      return <CardTrending {...props} />;
    case "details":
      return <CardDetails {...props} />;
    default:
      return <>There is no such card type</>;
  }
};
