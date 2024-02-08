import React from 'react';

import { isMobile, isTablet } from 'react-device-detect';
import BodyContent from './components/BodyContent';
import DesktopTopBar from './components/DesktopTopBar';
import Menu from './components/Menu';
import MobileTopBar from './components/MobileTopBar';
import useScreenSize, { TABLET_MAX_WIDTH } from './utils/useScreenSize';
import styled from 'styled-components';
import MobileMenu from './components/MobileMenu';
import MobileBodyContent from './components/MobileBodyContent';

const Container = styled.div<{ width: number; height: number }>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => `calc(${width}px)`};
  height: ${({ height }) => `calc(${height}px)`};
`;

type AppProps = {
  width: number;
  height: number;
};

const DesktopApp: React.FC<AppProps> = ({ width, height }) => {
  return (
    <Container width={width} height={height}>
      <DesktopTopBar />
      <BodyContent />
      <Menu />
    </Container>
  );
};

const MobileApp: React.FC<AppProps> = ({ width, height }) => {
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
    return <MobileApp width={width} height={height} />;
  } else {
    return <DesktopApp width={width} height={height} />;
  }
};

export default MainApp;
