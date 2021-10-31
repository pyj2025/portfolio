import "rc-menu/assets/index.css";

import React from "react";
import styled from "styled-components";
import Menu, { MenuItem } from "rc-menu";

const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-content: flex-start;
  align-items: center;
  background-color: #3c3c3c;
  color: white;
  height: 25px;
`;

const MenuContainer = styled(Menu)`
  position: absolute;
  background-color: #3c3c3c;
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

const DesktopTopBar: React.FC<unknown> = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleClick = () => setMenuOpen(!menuOpen);

  const handleAbout = () => {
    console.log("about");
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
              <MenuItemTitle>About</MenuItemTitle>
            </MenuItem>
          </MenuContainer>
        ) : null}
      </MainMenuBtnContainer>
    </Container>
  );
};

export default DesktopTopBar;
