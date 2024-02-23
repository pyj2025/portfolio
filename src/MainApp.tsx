import React from 'react';

import { isMobile, isTablet } from 'react-device-detect';
import BodyContent from './components/BodyContent';
import DesktopTopBar from './components/topbar/DesktopTopBar';
import Menu from './components/dock/Menu';
import MobileTopBar from './components/topbar/MobileTopBar';
import useScreenSize, { TABLET_MAX_WIDTH } from './utils/useScreenSize';
import styled from 'styled-components';
import MobileMenu from './components/dock/MobileMenu';
import MobileBodyContent from './components/MobileBodyContent';

const Container = styled.div<{ width: number; height: number }>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => `calc(${width}px)`};
  height: ${({ height }) => `calc(${height}px)`};
`;

type ScreenProps = {
  width: number;
  height: number;
};

const Desktop: React.FC<ScreenProps> = ({ width, height }) => {
  return (
    <Container width={width} height={height}>
      <DesktopTopBar />
      <BodyContent />
      <Menu />
    </Container>
  );
};

const Mobile: React.FC<ScreenProps> = ({ width, height }) => {
  return (
    <Container width={width} height={height}>
      <MobileTopBar />
      <MobileBodyContent />
      <MobileMenu />
    </Container>
  );
};

const MainApp: React.FC = () => {
  const { width, height } = useScreenSize();

  if (isMobile || isTablet || width < TABLET_MAX_WIDTH) {
    return <Mobile width={width} height={height} />;
  } else {
    return <Desktop width={width} height={height} />;
  }
};

export default MainApp;
