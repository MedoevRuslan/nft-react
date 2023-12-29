import React from "react";
import styled from "styled-components";
import { ContainerImage } from "../../components/ContainerImage";
import ActiveItemImg from "../../assets/images/products/image-2.png";
import ActiveItemImgRetina from "../../assets/images/products/image-2@2.png";
import { Icon } from "../../components/icon/Icon";
import { ContainerFlex } from "../../components/ContainerFlex";

export const ActiveItem = () => {
  return (
    <StyledActiveItem>
      <header>
        <ContainerFlex justify={"space-between"}>
          <ItemName>
            <ContainerFlex align={"center"} gap={"11px"}>
              <ContainerImage width={"60px"} height={"63px"}>
                <img
                  src={ActiveItemImg}
                  srcSet={`${ActiveItemImgRetina} 2x`}
                  alt={"active item name"}
                />
              </ContainerImage>
              <ItemOwner>
                <h3>NeuVey</h3>
                <span>
                  JenifferS
                  <Icon
                    iconId={"approved-circle"}
                    width={"12"}
                    viewbox={"0 0 13 13"}
                  />
                </span>
              </ItemOwner>
            </ContainerFlex>
          </ItemName>
          <ContainerFlex align={"center"} gap={"25px"}>
            <ItemSaleInfo>
              <ContainerFlex direction={"column"} align={"flex-end"}>
                <span>Sale</span>
                <span>
                  <Icon
                    iconId={"ephyr"}
                    width={"10"}
                    height={"14px"}
                    viewbox={"0 0 16 18"}
                  />
                  16.4
                </span>
                <time>6 Minutes ago</time>
              </ContainerFlex>
            </ItemSaleInfo>
            <Icon
              iconId={"chevron-up"}
              width={"15"}
              height={"20"}
              viewbox={"0 0 15 15"}
            />
          </ContainerFlex>
        </ContainerFlex>
      </header>
      <footer>
        <ActiveItemInfo>
          <ContainerFlex justify={"space-between"}>
            <li>
              <ContainerFlex direction={"column"}>
                <span>USD Price</span>
                <span>$19K</span>
              </ContainerFlex>
            </li>
            <li>
              <ContainerFlex direction={"column"}>
                <span>Quantity</span>
                <span>14.9K</span>
              </ContainerFlex>
            </li>
            <li>
              <ContainerFlex direction={"column"}>
                <span>floor price</span>
                <span>
                  <Icon
                    iconId={"ephyr"}
                    width={"10"}
                    height={"14px"}
                    viewbox={"0 0 16 18"}
                  />
                  16,4
                </span>
              </ContainerFlex>
            </li>
            <li>
              <ContainerFlex direction={"column"}>
                <span>traded</span>
                <span>
                  <Icon
                    iconId={"ephyr"}
                    width={"10"}
                    height={"14px"}
                    viewbox={"0 0 16 18"}
                  />
                  26,4
                </span>
              </ContainerFlex>
            </li>
          </ContainerFlex>
        </ActiveItemInfo>
      </footer>
    </StyledActiveItem>
  );
};

const StyledActiveItem = styled.article`
  padding: 14px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 17px 11px 59px 0 rgba(97, 97, 97, 0.25);

  ${ContainerImage} img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }

  header {
    padding-bottom: 12px;
    position: relative;

    &::after {
      position: absolute;
      content: "";
      bottom: 0;
      display: block;
      width: 100%;
      height: 1px;
      background-color: #d2d2d2;
    }
  }

  footer {
    padding-top: 20px;
  }
`;

const ItemName = styled.div``;
const ItemOwner = styled.div`
  h3 {
    font-size: 1rem;
    font-weight: 600;
  }

  span {
    font-size: 0.6875rem;
    font-weight: 400;
  }

  svg {
    margin-left: 5px;
  }
`;

const ItemSaleInfo = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
  span:first-of-type {
    color: #14a760;
  }
  span:last-of-type {
    font-size: 1rem;
    font-weight: 500;
  }
  time {
    color: #d2d2d2;
  }
`;

const ActiveItemInfo = styled.ul`
  li {
    color: #828282;
    text-align: center;
    font-size: 0.635rem;
    font-weight: 400;

    & span:last-of-type {
      color: #000;
      font-size: 0.875rem;
      font-weight: 500;
    }
  }
`;
