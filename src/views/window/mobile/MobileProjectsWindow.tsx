import React, { ReactNode } from 'react';
import { DraggableData, Position, ResizableDelta } from 'react-rnd';
import { WindowProps } from '../../../components/BodyContent';
import WindowTopbar from '../../../components/WindowTopbar';
import {
  MobileBackButton,
  MobileBackButtonContainer,
  MobileBodyContent,
  MobilePanel,
  MobileNavbar,
  MobileWindowBody,
  MobileNavbarItem,
  Window,
  MobileNavbarMenuLabel,
} from '../../../GlobalStyle';
import { WindowPositionSetting, WindowSizeSetting } from '../../../types';
import useScreenSize, { TABLET_MAX_WIDTH } from '../../../utils/useScreenSize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useWindows } from '../../../utils/context/context';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { getMobileNavbarMenuIcon } from '../../../components/getIcon';
import { IndexType } from '../../../components/projects/type';
import { getProject } from '../../../components/projects/getProject';

type MobilePanelWrapperProps = {
  backIndex: string;
  onClick: (index: string) => void;
  children?: ReactNode;
};

const MobilePanelWrapper: React.FC<MobilePanelWrapperProps> = React.memo(
  ({ backIndex, onClick, children }) => {
    return (
      <MobilePanel>
        <MobileBackButtonContainer>
          <MobileBackButton onClick={() => onClick(backIndex)}>
            <FontAwesomeIcon icon={faArrowLeft as IconProp} />
          </MobileBackButton>
        </MobileBackButtonContainer>
        {children}
      </MobilePanel>
    );
  }
);

const MobileProjectsWindow: React.FC<WindowProps> = ({ handleFocus }) => {
  const { width, height } = useScreenSize();
  const { focusedWindow } = useWindows();

  const projectsRef = React.useRef<any>();

  const [projectsSize, setProjectsSize] = React.useState<WindowSizeSetting>({
    width: 500,
    height: 300,
  });
  const [projectsPosition, setProjectsPosition] =
    React.useState<WindowPositionSetting>({
      x: 100,
      y: 100,
    });

  const [projectsPrevSetting, setProjectsPrevSetting] = React.useState<
    (WindowSizeSetting & WindowPositionSetting) | null
  >(null);
  const [index, setIndex] = React.useState<IndexType>('Projects');
  const [isMobileWindow, setIsMobileWindow] = React.useState(false);

  React.useEffect(() => {
    if (width < TABLET_MAX_WIDTH) {
      setProjectsSize({
        width,
        height: height - 80 - 25,
      });
      setProjectsPosition({
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
    (name: IndexType) => {
      setIndex(name);
    },
    [setIndex]
  );

  return (
    <Window
      id="Projects"
      ref={projectsRef}
      size={{ width: projectsSize.width, height: projectsSize.height }}
      position={{ x: projectsPosition.x, y: projectsPosition.y }}
      dragHandleClassName="topbar"
      minWidth={isMobileWindow ? width : 525}
      minHeight={300}
      style={{ zIndex: focusedWindow === 'Projects' ? 10 : undefined }}
      onDragStart={handleFocus}
      onDragStop={(_e: any, data: DraggableData) => {
        setProjectsPosition({ x: data.x, y: data.y });
      }}
      onResizeStop={(
        _e: MouseEvent | TouchEvent,
        _dir: any,
        ref: any,
        _delta: ResizableDelta,
        position: Position
      ) => {
        setProjectsSize({
          width: ref.style.width,
          height: ref.style.height,
        });
        setProjectsPosition({ x: position.x, y: position.y });
      }}
    >
      <WindowTopbar
        title="Projects"
        windowRef={projectsRef}
        size={projectsSize}
        setSize={setProjectsSize}
        position={projectsPosition}
        setPosition={setProjectsPosition}
        prevSetting={projectsPrevSetting}
        setPrevSetting={setProjectsPrevSetting}
        isMobileWindow={isMobileWindow}
      />
      <MobileWindowBody>
        <MobileNavbar>
          <MobileNavbarItem
            title="Projects"
            onClick={() => handleClick('Projects')}
            focus
          >
            {getMobileNavbarMenuIcon('Folder')}
            <MobileNavbarMenuLabel>Projects</MobileNavbarMenuLabel>
          </MobileNavbarItem>
          <MobileNavbarItem
            title="Web"
            onClick={() => handleClick('WebProjects')}
            focus={
              index === 'DatApex' ||
              index === 'Portfolio' ||
              index === 'WebProjects'
            }
            isChild
          >
            {getMobileNavbarMenuIcon('Folder')}
            <MobileNavbarMenuLabel>Web</MobileNavbarMenuLabel>
          </MobileNavbarItem>
          <MobileNavbarItem
            title="Mobile"
            onClick={() => handleClick('MobileProjects')}
            focus={index === 'Foodie' || index === 'MobileProjects'}
            isChild
          >
            {getMobileNavbarMenuIcon('Folder')}
            <MobileNavbarMenuLabel>Mobile</MobileNavbarMenuLabel>
          </MobileNavbarItem>
        </MobileNavbar>
        <MobileBodyContent>
          {index === 'Projects' ||
          index === 'WebProjects' ||
          index === 'MobileProjects' ? (
            getProject(index, handleClick)
          ) : (
            <MobilePanelWrapper
              key={index}
              backIndex={
                index === 'DatApex' || index === 'Portfolio'
                  ? 'WebProjects'
                  : 'MobileProjects'
              }
              onClick={() =>
                handleClick(
                  index === 'DatApex' || index === 'Portfolio'
                    ? 'WebProjects'
                    : 'MobileProjects'
                )
              }
            >
              {getProject(index, handleClick)}
            </MobilePanelWrapper>
          )}
        </MobileBodyContent>
      </MobileWindowBody>
    </Window>
  );
};

export default MobileProjectsWindow;
