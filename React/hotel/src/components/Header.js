import React, { useState } from "react";
import styled from "styled-components";

const HeaderAll = styled.header`
  width: 100%;
  height: 180px;
  background-color: white;
  position: fixed;
  top: 0;
  z-index: 999;
  padding: 30px 0px;
`;
const HeaderItem = styled.div`
  height: 120px;
  width: 100%;
  background-color: white;
  padding: 0 80px;
`;
const TopBar = styled.div`
  width: 100%;
  height: 60px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #502875;
  font-family: "Vitro-Inspire";
`;
const CsMenu = styled.ul`
  display: flex;
  font-size: 14px;
  gap: 20px;
  li {
    color: #111111;
    position: relative;
    padding-right: 20px;

    &::after {
      content: "|";
      position: absolute;
      right: 0;
      color: grey;
      font-size: 13px;
    }

    &:last-child::after {
      content: "";
    }
  }
`;

const BottomBar = styled.div`
  width: 100%;
  height: 60px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BottomNav = styled.ul`
  display: flex;
  gap: 40px;

  li {
    font-size: 18px;
    font-weight: bold;
    color: #111111;
    cursor: pointer;
    transition: color 0.6s ease;
    &:last-child {
      color: #8a57c1;
    }
    &:hover {
      color: #8a47c1;
    }
  }
`;

const BookBtn = styled.button`
  background-color: #e6af1b;
  border: none;
  padding: 14px 40px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  color: white;
  cursor: pointer;
  transition: background-color 0.6s ease;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background-color: #8a47c1;
  }
  img {
    width: 18px;
    margin-top: 2px;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 180px;
  left: 0;
  width: 100%;
  height: calc(100% - 180px);
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${({ active }) => (active ? 1 : 0)};
  visibility: ${({ active }) => (active ? "visible" : "hidden")};
  transition: all 0.3s ease;
  z-index: 100;
`;

const SubMenu = styled.div`
  position: absolute;
  top: 180px;
  left: 0;
  width: 100%;
  background-color: white;
  padding: 40px 0;
  opacity: ${({ active }) => (active ? 1 : 0)};
  visibility: ${({ active }) => (active ? "visible" : "hidden")};
  transition: all 0.3s ease;
  z-index: 101;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HoverArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Header() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <HeaderAll>
      <Overlay active={isHovering} />
      <HeaderItem>
        <TopBar>
          <Logo>INSPIRE</Logo>
          <CsMenu>
            <li>고객센터</li>
            <li>대관문의</li>
            <li>오시는 길</li>
            <li>가입하기</li>
            <li>로그인</li>
          </CsMenu>
        </TopBar>
        <BottomBar>
          <HoverArea
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <BottomNav>
              <li>OFFERS</li>
              <li>STAY</li>
              <li>EAT & DRINK</li>
              <li>MALL</li>
              <li>SPLASH BAY</li>
              <li>ENTERTAINMENT</li>
              <li>MEET</li>
              <li>CASINO</li>
              <li>MOMENTUM</li>
            </BottomNav>
            <SubMenu active={isHovering}>
              <img src="/img/calendaricon.png" alt="Submenu Image" />
            </SubMenu>
          </HoverArea>
          <BookBtn>
            <img src="/img/calendaricon.png"></img>
            BOOK NOW
          </BookBtn>
        </BottomBar>
      </HeaderItem>
    </HeaderAll>
  );
}
export default Header;
