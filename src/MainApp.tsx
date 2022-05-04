import React from "react";

import { isMobile, isTablet } from "react-device-detect";
import BodyContent from "./components/BodyContent";
import DesktopTopBar from "./components/DesktopTopBar";
import Menu from "./components/Menu";
import MobileTopBar from "./components/MobileTopBar";
import useScreenSize, { TABLET_MAX_WIDTH } from "./utils/useScreenSize";
import { WindowsProvider } from "./utils/context/WindowsProvider";
import styled from "styled-components";
import MobileMenu from "./components/MobileMenu";
import MobileBodyContent from "./components/MobileBodyContent";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
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
      <MobileBodyContent />
      <MobileMenu />
    </Container>
  );
};

const MainApp: React.FC = () => {
  const { width } = useScreenSize();

  return (
    <WindowsProvider>
      {isMobile || isTablet || width < TABLET_MAX_WIDTH ? (
        <MobileApp />
      ) : (
        <DesktopApp />
      )}
    </WindowsProvider>
  );
};

export default MainApp;
