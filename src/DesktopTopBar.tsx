import "rc-menu/assets/index.css";

import React from "react";
import styled from "styled-components";
import Menu, { Divider, MenuItem } from "rc-menu";
import Clock from "./components/Clock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { BoldText, MutedText } from "./GlobalStyle";
import { useWindows } from "./utils/context/context";
import useScreenSize from "./utils/useScreenSize";
import useClickOutside from "./utils/useClickOutside";

const Container = styled.div<{ width: number }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  color: rgb(255, 255, 255);
  width: ${({ width }) => width}px;
  height: 3.125rem;
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

const MenuItemTitle = styled.div`
  color: white;
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

const DesktopTopBar: React.FC = () => {
  const { width } = useScreenSize();
  const { toggleDesktopAboutOpen } = useWindows();

  const mainMenuRef = React.useRef<HTMLDivElement | null>(null);

  const [menuOpen, setMenuOpen] = React.useState(false);

  useClickOutside(mainMenuRef, () => {
    setMenuOpen(false);
  });

  const handleClick = () => setMenuOpen(!menuOpen);

  const handleAbout = () => {
    toggleDesktopAboutOpen();
    setMenuOpen(false);
  };

  return (
    <Container width={width}>
      <MainMenuBtnContainer ref={mainMenuRef}>
        <MainMenuBtn onClick={handleClick}>
          <BoldText>Joon</BoldText>
        </MainMenuBtn>
        {menuOpen ? (
          <MenuContainer
            style={{
              padding: 0,
              border: 0,
            }}
          >
            <MenuItem key="about" onClick={handleAbout}>
              <MenuItemTitle>About Joon</MenuItemTitle>
            </MenuItem>
            <Divider />
            <MenuItem key="restart" onClick={() => window.location.reload()}>
              <MenuItemTitle>Restart</MenuItemTitle>
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
