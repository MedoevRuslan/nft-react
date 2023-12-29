import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import ProfileImg from "../../assets/images/Profile-photo.png";
import ProfileImgRetina from "../../assets/images/Profile-photo@2x.png";
import { ContainerImage } from "../../components/ContainerImage";
import { Link } from "react-router-dom";

export const ProfileFloatingWindow = () => {
  return (
    <FloatingWindow>
      <header>
        <ContainerImage width={"104px"}>
          <ProfilePhoto
            src={ProfileImg}
            srcSet={`${ProfileImgRetina} 2x`}
            alt={"profile photo"}
          />
        </ContainerImage>
        <ProfileName>Harry K.</ProfileName>
        <h3>
          <span>0x864784f44ajf84bskw4sssssss</span>
          <Icon iconId={"copy"} width={"18"} viewbox={"0 0 18 18"} />
        </h3>
        <ItemsInfo>
          <ItemInfo>
            <span>9.9K</span>
            <span>items</span>
          </ItemInfo>
          <ItemInfo>
            <span>14.9K</span>
            <span>items</span>
          </ItemInfo>
          <ItemInfo>
            <span>
              <Icon
                iconId={"ephyr"}
                width={"10"}
                height={"14px"}
                viewbox={"0 0 16 18"}
              />
              16.4
            </span>
            <span>Floor Price</span>
          </ItemInfo>
        </ItemsInfo>
        <ProfileCite>” Fill My Heart With Art And Let Me Create “</ProfileCite>
        <ProfileActions>
          <ProfileEdit to={"#"}>Edit Profile</ProfileEdit>
          <a href="#">
            <Icon iconId={"share"} width={"19px"} viewbox={"0 0 19 19"} />
          </a>
          <a href="#">
            <Icon iconId={"instagram"} width={"19px"} viewbox={"0 0 19 20"} />
          </a>
        </ProfileActions>
      </header>
      <footer>
        Joined <time>December 2022</time>
      </footer>
    </FloatingWindow>
  );
};

const FloatingWindow = styled.article`
  position: absolute;
  top: 160px;
  left: 37px;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 15px 15px 55px 0 rgba(0, 0, 0, 0.12);

  header {
    padding: 35px 44px 30px;
    text-align: center;
    border-bottom: 1px solid #f3f3f3;

    ${ContainerImage} {
      margin: 0 auto;
    }

    h3 {
      font-family: Outfit, sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      color: #93989a;
      margin-bottom: 30px;
      cursor: pointer;

      svg {
        transition: color 0.15s ease-in;
      }

      &:hover svg {
        color: #000;
      }

      span {
        display: inline-block;
        width: 162px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  footer {
    font-size: 0.875rem;
    font-weight: 400;
    text-align: center;
    color: #93989a;
    padding: 16px 0 18px;
  }
`;
const ProfileName = styled.span`
  font-family: Outfit, sans-serif;
  font-weight: 600;
  font-size: 1.25rem;
  color: #010101;
  margin-bottom: 4px;
`;
const ProfilePhoto = styled.img`
  margin-bottom: 16px;
`;
const ItemsInfo = styled.ul`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 30px;
`;
const ItemInfo = styled.li`
  display: flex;
  flex-direction: column;

  span:first-child {
    color: ${(props) => props.theme.colors.accent};
    font-weight: 500;
    font-size: 0.875rem;
  }

  span:last-child {
    color: #828282;
    font-weight: 400;
    font-size: 0.625rem;
  }
`;
const ProfileCite = styled.cite`
  display: inline-block;
  font-style: normal;
  width: 204px;
  font-size: 0.875rem;
  color: #93989a;
  margin-bottom: 36px;
`;

const ProfileActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;

  a + a {
    display: flex;
    border-radius: 9px;
    border: 1px solid #f3f3f3;
    padding: 7px;
    transition: border-color 0.15s ease-in;

    &:hover {
      border-color: #000;
    }
  }
`;

const ProfileEdit = styled(Link)`
  color: #fff;
  padding: 7px 13px;
  font-family: Outfit, sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  border-radius: 9px;
  background-color: #130f26;
  border: 1px solid #130f26;

  transition:
    color 0.15s ease-in,
    background-color 0.15s ease-in;

  &:hover {
    background-color: transparent;
    color: #130f26;
  }
`;
