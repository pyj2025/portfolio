import React from 'react';
import { DraggableData, Position, ResizableDelta } from 'react-rnd';
import {
  SkillsIndexType,
  WindowPositionSetting,
  WindowSizeSetting,
} from '../../../types';
import {
  MobileBackButton,
  MobileBackButtonContainer,
  MobileBodyContent,
  MobilePanel,
  MobileMenuItemLabel,
  MobileNavbar,
  MobileWindowBody,
  MobileWindowMenuItem,
  MobileNavbarItem,
  Window,
  MobileNavbarMenuLabel,
} from '../../../GlobalStyle';
import useScreenSize, { TABLET_MAX_WIDTH } from '../../../utils/useScreenSize';
import { WindowProps } from '../../../components/BodyContent';
import WindowTopbar from '../../../components/WindowTopbar';
import FrontEnd from '../../../components/skills/FrontEnd';
import BackEnd from '../../../components/skills/BackEnd';
import Mobile from '../../../components/skills/Mobile';
import ProgrammingLanguage from '../../../components/skills/ProgrammingLanguage';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useWindows } from '../../../utils/context/context';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { getIcon, getMobileNavbarMenuIcon } from '../../../components/getIcon';

type MobileWindowMenuProps = {
  onClick: (index: SkillsIndexType) => void;
};

const MobileSkillsWindowMenu: React.FC<MobileWindowMenuProps> = ({
  onClick,
}) => {
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
        {getIcon('CodeFile')}
        <MobileMenuItemLabel>Programming Language</MobileMenuItemLabel>
      </MobileWindowMenuItem>
    </>
  );
};

const MobileSkillsWindow: React.FC<WindowProps> = ({ handleFocus }) => {
  const { width, height } = useScreenSize();
  const { focusedWindow } = useWindows();

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
      onDragStart={handleFocus}
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
        <MobileNavbar>
          <MobileNavbarItem
            title="Front-End"
            onClick={() => handleClick('Front')}
            focus={index === 'Front'}
          >
            {getMobileNavbarMenuIcon('Folder')}
            <MobileNavbarMenuLabel>Front</MobileNavbarMenuLabel>
          </MobileNavbarItem>
          <MobileNavbarItem
            title="Back-End"
            onClick={() => handleClick('Back')}
            focus={index === 'Back'}
          >
            {getMobileNavbarMenuIcon('Folder')}
            <MobileNavbarMenuLabel>Back</MobileNavbarMenuLabel>
          </MobileNavbarItem>
          <MobileNavbarItem
            title="Mobile"
            onClick={() => handleClick('Mobile')}
            focus={index === 'Mobile'}
          >
            {getMobileNavbarMenuIcon('Folder')}
            <MobileNavbarMenuLabel>Mobile</MobileNavbarMenuLabel>
          </MobileNavbarItem>
          <MobileNavbarItem
            title="Programming Language"
            onClick={() => handleClick('Programming')}
            focus={index === 'Programming'}
          >
            {getMobileNavbarMenuIcon('CodeFile')}
            <MobileNavbarMenuLabel>Language</MobileNavbarMenuLabel>
          </MobileNavbarItem>
        </MobileNavbar>
        <MobileBodyContent>
          {index === 'Menu' ? (
            <MobileSkillsWindowMenu onClick={handleClick} />
          ) : (
            <MobilePanel>
              <MobileBackButtonContainer>
                <MobileBackButton onClick={() => handleClick('Menu')}>
                  <FontAwesomeIcon icon={faArrowLeft as IconProp} />
                </MobileBackButton>
              </MobileBackButtonContainer>
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
