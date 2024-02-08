import React from 'react';
import styled from 'styled-components';
import { DraggableData, Position, ResizableDelta } from 'react-rnd';
import {
  SkillsIndexType,
  WindowPositionSetting,
  WindowSizeSetting,
} from '../../../types';
import { Window, WindowBody, WindowBodyContent } from '../../../GlobalStyle';
import useScreenSize, { TABLET_MAX_WIDTH } from '../../../utils/useScreenSize';
import WindowTopbar from '../../../components/WindowTopbar';
import useWindowsStore from '../../../utils/useWindowsStore';
import FrontEnd from '../../../components/skills/FrontEnd';
import BackEnd from '../../../components/skills/BackEnd';
import Mobile from '../../../components/skills/Mobile';
import ProgrammingLanguage from '../../../components/skills/ProgrammingLanguage';
import SkillsNavbar from '../../../components/skills/SkillsNavbar';

export const SkillsContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const SkillsWindow: React.FC = () => {
  const { width, height } = useScreenSize();
  const { focusedWindow, setFocusedWindow } = useWindowsStore((state) => state);

  const skillsRef = React.useRef<any>();

  const [skillsSize, setSkillsSize] = React.useState<WindowSizeSetting>({
    width: 500,
    height: 300,
  });
  const [skillsPosition, setSkillsPosition] =
    React.useState<WindowPositionSetting>({
      x: 60,
      y: 60,
    });
  const [skillsPrevSetting, setSkillsPrevSetting] = React.useState<
    (WindowSizeSetting & WindowPositionSetting) | null
  >(null);
  const [index, setIndex] = React.useState<SkillsIndexType>('Front');
  const [isMobileWindow, setIsMobileWindow] = React.useState(false);

  React.useEffect(() => {
    if (width < TABLET_MAX_WIDTH) {
      setSkillsSize({
        width,
        height: height - 80 - 25,
      });
      setSkillsPosition({
        x: 0,
        y: 0,
      });
      setIsMobileWindow(true);
    } else {
      setIsMobileWindow(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  const focusSkillsWindow = React.useCallback(() => {
    setFocusedWindow('Skills');
  }, [setFocusedWindow]);

  const handleClick = React.useCallback(
    (name: SkillsIndexType) => {
      setIndex(name);
    },
    [setIndex]
  );

  return (
    <Window
      id="Skills"
      ref={skillsRef}
      size={{ width: skillsSize.width, height: skillsSize.height }}
      position={{ x: skillsPosition.x, y: skillsPosition.y }}
      dragHandleClassName="topbar"
      minWidth={isMobileWindow ? width : 525}
      minHeight={300}
      style={{ zIndex: focusedWindow === 'Skills' ? 10 : undefined }}
      onDragStart={(_e: any, _data: DraggableData) => {
        focusSkillsWindow();
      }}
      onDragStop={(_e: any, data: DraggableData) => {
        setSkillsPosition({ x: data.x, y: data.y });
      }}
      onResizeStop={(
        _e: MouseEvent | TouchEvent,
        _dir: any,
        ref: any,
        _delta: ResizableDelta,
        position: Position
      ) => {
        setSkillsSize({
          width: ref.style.width,
          height: ref.style.height,
        });
        setSkillsPosition({ x: position.x, y: position.y });
      }}
    >
      <WindowTopbar
        title="Skills"
        windowRef={skillsRef}
        size={skillsSize}
        setSize={setSkillsSize}
        position={skillsPosition}
        setPosition={setSkillsPosition}
        prevSetting={skillsPrevSetting}
        setPrevSetting={setSkillsPrevSetting}
        isMobileWindow={isMobileWindow}
      />
      <WindowBody onClick={focusSkillsWindow}>
        <SkillsNavbar index={index} onClick={handleClick} />
        <WindowBodyContent>
          {index === 'Front' ? <FrontEnd /> : null}
          {index === 'Back' ? <BackEnd /> : null}
          {index === 'Mobile' ? <Mobile /> : null}
          {index === 'Programming' ? <ProgrammingLanguage /> : null}
        </WindowBodyContent>
      </WindowBody>
    </Window>
  );
};

export default SkillsWindow;
