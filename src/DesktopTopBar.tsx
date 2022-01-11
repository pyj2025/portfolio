import "rc-menu/assets/index.css";

import React from "react";
import styled from "styled-components";
import Menu, { MenuItem } from "rc-menu";
import Clock from "./components/Clock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { MutedText } from "./GlobalStyle";

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

const MainMenuBtnTitle = styled.div`
  font-weight: bold;
`;

const MenuItemTitle = styled.div`
  height: 20px;
`;

const TopbarAppContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
`;

const TopbarAppItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 10px;
`;

const TopbarAppIcon = styled(FontAwesomeIcon)`
  margin-right: 6px;
  opacity: 0.5;
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
        <TopbarAppItemContainer>
          <TopbarAppIcon icon={faMapMarkerAlt} />
          <MutedText>Chicago, IL, USA</MutedText>
        </TopbarAppItemContainer>
        <TopbarAppItemContainer>
          <Clock />
        </TopbarAppItemContainer>
      </TopbarAppContainer>
    </Container>
  );
};

export default DesktopTopBar;
