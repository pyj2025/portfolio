import React from "react";

import { isMobile, isTablet } from "react-device-detect";
import BodyContent from "../BodyContent";
import DesktopTopBar from "../DesktopTopBar";
import Menu from "../Menu";
import MobileTopBar from "../MobileTopBar";
import useScreenSize, { TABLET_MAX_WIDTH } from "../utils/useScreenSize";
import { WindowsProvider } from "../utils/context/WindowsProvider";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 25px auto 80px;
`;

const MainApp: React.FC = () => {
  const { width } = useScreenSize();

  return (
    <WindowsProvider>
      <Wrapper>
        {isMobile || isTablet || width < TABLET_MAX_WIDTH ? (
          <MobileTopBar />
        ) : (
          <DesktopTopBar />
        )}
        <BodyContent />
        <Menu />
      </Wrapper>
    </WindowsProvider>
  );
};

export default MainApp;
