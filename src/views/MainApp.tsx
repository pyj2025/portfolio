import React from "react";

import { isMobile, isTablet } from "react-device-detect";
import BodyContent from "./window/desktop/BodyContent";
import DesktopTopBar from "../DesktopTopBar";
import Menu from "../Menu";
import MobileTopBar from "../MobileTopBar";
import useScreenSize, { TABLET_MAX_WIDTH } from "../utils/useScreenSize";
import { WindowsProvider } from "../utils/context/WindowsProvider";
import styled from "styled-components";
import MobileMenu from "../MobileMenu";
import MobileBodyContent from "./window/mobile/MobileBodyContent";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
      <MobileBodyContent />
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
