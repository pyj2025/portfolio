import React from 'react';
import { DraggableData, Position, ResizableDelta } from 'react-rnd';
import {
  SkillsIndexType,
  WindowPositionSetting,
  WindowSizeSetting,
} from '../../../types';
import {
  MobileBodyContent,
  MobileMenuItemLabel,
  MobileWindowBody,
  MobileWindowMenuItem,
  Window,
} from '../../../GlobalStyle';
import useScreenSize, { TABLET_MAX_WIDTH } from '../../../utils/useScreenSize';
import WindowTopbar from '../../../components/WindowTopbar';
import FrontEnd from '../../../components/skills/FrontEnd';
import BackEnd from '../../../components/skills/BackEnd';
import Mobile from '../../../components/skills/Mobile';
import ProgrammingLanguage from '../../../components/skills/ProgrammingLanguage';
import { getIcon } from '../../../components/getIcon';
import useWindowsStore from '../../../utils/useWindowsStore';
import MobileSkillsNavbar from '../../../components/skills/MobileSkillsNavbar';
import MobilePanel from '../../../components/MobilePanel';

type MobileWindowMenuProps = {
  onClick: (index: SkillsIndexType) => void;
};

const MobileSkillsWindowMenu: React.FC<MobileWindowMenuProps> = React.memo(
  ({ onClick }) => {
    return (
      <>
        <MobileWindowMenuItem onClick={() => onClick('Front')}>
          {getIcon('Folder')}
          <MobileMenuItemLabel>Front-End</MobileMenuItemLabel>
        </MobileWindowMenuItem>
        <MobileWindowMenuItem onClick={() => onClick('Back')} isEven>
          {getIcon('Folder')}
          <MobileMenuItemLabel>Back-End</MobileMenuItemLabel>
        </MobileWindowMenuItem>
        <MobileWindowMenuItem onClick={() => onClick('Mobile')}>
          {getIcon('Folder')}
          <MobileMenuItemLabel>Mobile</MobileMenuItemLabel>
        </MobileWindowMenuItem>
        <MobileWindowMenuItem onClick={() => onClick('Programming')} isEven>
          {getIcon('CodeFile', 48)}
          <MobileMenuItemLabel>Programming Language</MobileMenuItemLabel>
        </MobileWindowMenuItem>
      </>
    );
  }
);

const MobileSkillsWindow: React.FC = () => {
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
  const [index, setIndex] = React.useState<SkillsIndexType>('Menu');
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
        setFocusedWindow('Skills');
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
      <MobileWindowBody>
        <MobileSkillsNavbar index={index} onClick={handleClick} />
        <MobileBodyContent>
          {index === 'Menu' ? (
            <MobileSkillsWindowMenu onClick={handleClick} />
          ) : (
            <MobilePanel onClick={() => handleClick('Menu')}>
              {index === 'Front' && <FrontEnd />}
              {index === 'Back' && <BackEnd />}
              {index === 'Mobile' && <Mobile />}
              {index === 'Programming' && <ProgrammingLanguage />}
            </MobilePanel>
          )}
        </MobileBodyContent>
      </MobileWindowBody>
    </Window>
  );
};

export default MobileSkillsWindow;
