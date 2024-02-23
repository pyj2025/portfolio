import React from 'react';
import styled from 'styled-components';
import useWindowsStore from '../../utils/useWindowsStore';
import { SMALL_ICON_SIZE, getIcon } from '../getIcon';

const WindowTopbar = styled.div`
  width: 100%;
  height: 28px;
  background-color: rgb(51, 52, 54);
  border-bottom: 1px rgb(70, 75, 80) solid;
  padding: 0px 10px;
  cursor: default;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  align-items: center;
  box-sizing: border-box;
`;

const TopbarBtnContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const TopbarBtn = styled.div<{ color: string; disabled: boolean }>`
  width: 12px;
  height: 12px;
  color: #62574c;
  display: inline-block;
  margin-left: ${({ color }: { color: string }) =>
    color === 'close' ? '0px' : '8px'};
  border-radius: 8px;
  align-items: center;
  vertical-align: middle;
  background-color: ${({
    color,
    disabled,
  }: {
    color: string;
    disabled: boolean;
  }) =>
    disabled
      ? '#686B6D'
      : color === 'minimize'
      ? '#F7BD45'
      : color === 'expand'
      ? '#5FCB43'
      : '#ee514a'};
  cursor: ${({ disabled }: { disabled: boolean }) =>
    disabled ? undefined : 'pointer'};
`;

const TopbarTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 14px;
`;

const TopbarTitleText = styled.span`
  margin-left: 6px;
  pointer-events: none;
`;

const WelcomeTopbar: React.FC = () => {
  const { focusedWindow, closeWelcomeWindow } = useWindowsStore(
    (state) => state
  );

  return (
    <WindowTopbar className="topbar">
      <TopbarBtnContainer>
        <TopbarBtn
          color="close"
          title={focusedWindow === 'Welcome' ? 'Close' : undefined}
          onClick={closeWelcomeWindow}
          onTouchStart={closeWelcomeWindow}
          disabled={focusedWindow !== 'Welcome'}
        />
        <TopbarBtn color="disabled" disabled={true} />
        <TopbarBtn color="disabled" disabled={true} />
      </TopbarBtnContainer>
      <TopbarTitle>
        {getIcon('Terminal', SMALL_ICON_SIZE)}
        <TopbarTitleText>Welcome</TopbarTitleText>
      </TopbarTitle>
    </WindowTopbar>
  );
};

export default WelcomeTopbar;
