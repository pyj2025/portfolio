import "rc-menu/assets/index.css";

import React from "react";
import styled from "styled-components";
import Menu, { MenuItem } from "rc-menu";
import Clock from "./components/Clock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow, faWifi } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  height: 25px;
`;

const MenuContainer = styled(Menu)`
  position: absolute;
  margin: 2px;
`;

const MainMenuBtnContainer = styled.div`
  padding-left: 4px;
`;

const MainMenuBtn = styled.button`
  background-color: transparent;
  border: 0;
  color: white;
`;

const MainMenuBtnTitle = styled.span`
  font-weight: bold;
`;

const MenuItemTitle = styled.div`
  height: 20px;
`;

const TopbarAppContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: 10px;
`;

type DesktopTopBarProps = {
  toggleDesktopAboutOpen: () => void;
};

const DesktopTopBar: React.FC<DesktopTopBarProps> = ({
  toggleDesktopAboutOpen,
}) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleClick = () => setMenuOpen(!menuOpen);

  const handleAbout = () => {
    toggleDesktopAboutOpen();
    setMenuOpen(false);
  };

  return (
    <Container>
      <MainMenuBtnContainer>
        <MainMenuBtn onClick={handleClick}>
          <MainMenuBtnTitle>Joon</MainMenuBtnTitle>
        </MainMenuBtn>
        {menuOpen ? (
          <MenuContainer
            style={{
              padding: 0,
              border: 0,
            }}
          >
            <MenuItem
              style={{
                padding: 5,
                color: "white",
              }}
              onClick={handleAbout}
            >
              <MenuItemTitle>About Joon</MenuItemTitle>
            </MenuItem>
          </MenuContainer>
        ) : null}
      </MainMenuBtnContainer>
      <TopbarAppContainer>
        <div>
          <FontAwesomeIcon icon={faLocationArrow} />
        </div>
        <div>
          <FontAwesomeIcon icon={faWifi} />
        </div>
        <div>
          <Clock />
        </div>
      </TopbarAppContainer>
    </Container>
  );
};

export default DesktopTopBar;
