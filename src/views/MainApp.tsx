import React from "react";

import { isMobile, isTablet } from "react-device-detect";
import BodyContent from "./BodyContent";
import DesktopTopBar from "../DesktopTopBar";
import Menu from "../Menu";
import MobileTopBar from "../MobileTopBar";
import useScreenSize, { TABLET_MAX_WIDTH } from "../utils/useScreenSize";
import { WindowsProvider } from "../utils/context/WindowsProvider";
import styled from "styled-components";
import MobileMenu from "../MobileMenu";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Container = styled.div`
  display: grid;
  grid-template-rows: 25px auto 80px;
  width: 100%;
  height: 100%;
`;

const DesktopApp: React.FC = () => {
  return (
    <Container>
      <DesktopTopBar />
      <BodyContent />
      <Menu />
    </Container>
  );
};

const MobileApp: React.FC = () => {
  return (
    <Container>
      <MobileTopBar />
      <BodyContent />
      <MobileMenu />
    </Container>
  );
};

const MainApp: React.FC = () => {
  const { width } = useScreenSize();

  return (
    <WindowsProvider>
      <Wrapper>
        {isMobile || isTablet || width < TABLET_MAX_WIDTH ? (
          <MobileApp />
        ) : (
          <DesktopApp />
        )}
      </Wrapper>
    </WindowsProvider>
  );
};

export default MainApp;
