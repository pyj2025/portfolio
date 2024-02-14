import React, { ReactNode } from 'react';
import { DraggableData, Position, ResizableDelta } from 'react-rnd';
import WindowTopbar from '../../../components/WindowTopbar';
import {
  MobileBackButton,
  MobileBackButtonContainer,
  MobileBodyContent,
  MobilePanel,
  MobileWindowBody,
  Window,
} from '../../../GlobalStyle';
import {
  ProjectIndexType,
  WindowPositionSetting,
  WindowSizeSetting,
} from '../../../types';
import useScreenSize, { TABLET_MAX_WIDTH } from '../../../utils/useScreenSize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { getProject } from '../../../components/projects/getProject';
import useWindowsStore from '../../../utils/useWindowsStore';
import MobileProjectsNavbar from '../../../components/projects/MobileProjectsNavbar';

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

const MobileProjectsWindow: React.FC = () => {
  const { width, height } = useScreenSize();
  const { focusedWindow, setFocusedWindow } = useWindowsStore((state) => state);

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
  const [index, setIndex] = React.useState<ProjectIndexType>('Projects');
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
    (name: ProjectIndexType) => {
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
      onDragStart={(_e: any, _data: DraggableData) => {
        setFocusedWindow('Projects');
      }}
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
        <MobileProjectsNavbar index={index} onClick={handleClick} />
        <MobileBodyContent>
          {['Projects', 'WebProjects', 'MobileProjects'].includes(index) ? (
            getProject(index, handleClick)
          ) : (
            <MobilePanelWrapper
              key={index}
              backIndex={
                ['DatApex', 'MovieNext', 'Portfolio'].includes(index)
                  ? 'WebProjects'
                  : 'MobileProjects'
              }
              onClick={() =>
                handleClick(
                  ['DatApex', 'MovieNext', 'Portfolio'].includes(index)
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
