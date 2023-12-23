import React from 'react';
import styled from 'styled-components';
import { BoldText } from '../GlobalStyle';
import useScreenSize from '../utils/useScreenSize';

const Container = styled.div<{ width: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  color: rgb(255, 255, 255);
  width: ${({ width }) => width}px;
  height: 25px;
`;

const MobileTopBar: React.FC = () => {
  const { width } = useScreenSize();

  return (
    <Container width={width}>
      <BoldText>Youngjoon Park</BoldText>
    </Container>
  );
};

export default MobileTopBar;
