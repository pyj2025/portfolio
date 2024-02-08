import React from 'react';
import { DraggableData, Position, ResizableDelta } from 'react-rnd';
import { WindowProps } from '../../../components/BodyContent';
import {
  NavItmLabel,
  Window,
  WindowBody,
  WindowBodyContent,
  WindowBodyNavbar,
  WindowBodyNavItm,
} from '../../../GlobalStyle';
import {
  ProjectIndexType,
  WindowPositionSetting,
  WindowSizeSetting,
} from '../../../types';
import useScreenSize, { TABLET_MAX_WIDTH } from '../../../utils/useScreenSize';
import { SMALL_ICON_SIZE, getIcon } from '../../../components/getIcon';
import { getProject } from '../../../components/projects/getProject';
import WindowTopbar from '../../../components/WindowTopbar';
import useWindowsStore from '../../../utils/useWindowsStore';

const ProjectsWindow: React.FC<WindowProps> = ({ handleFocus }) => {
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

  const clickContentBody = React.useCallback(() => {
    setFocusedWindow('Projects');
  }, [setFocusedWindow]);

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
      <WindowBody onClick={clickContentBody}>
        <WindowBodyNavbar>
          <WindowBodyNavItm first onClick={() => handleClick('Projects')} focus>
            {getIcon('Folder', SMALL_ICON_SIZE)}
            <NavItmLabel>Projects</NavItmLabel>
          </WindowBodyNavItm>
          <WindowBodyNavItm
            onClick={() => handleClick('WebProjects')}
            focus={['WebProjects', 'DatApex', 'Portfolio'].includes(index)}
            isChild
          >
            {getIcon('Folder', SMALL_ICON_SIZE)}
            <NavItmLabel>Web</NavItmLabel>
          </WindowBodyNavItm>
          <WindowBodyNavItm
            onClick={() => handleClick('MobileProjects')}
            focus={[
              'MobileProjects',
              'Foodie',
              'WebGame',
              'Tippy',
              'Flix',
              'Twitter',
              'Parstagram',
              'ToonFlix',
            ].includes(index)}
            isChild
          >
            {getIcon('Folder', SMALL_ICON_SIZE)}
            <NavItmLabel>Mobile</NavItmLabel>
          </WindowBodyNavItm>
        </WindowBodyNavbar>
        <WindowBodyContent>{getProject(index, handleClick)}</WindowBodyContent>
      </WindowBody>
    </Window>
  );
};

export default ProjectsWindow;
