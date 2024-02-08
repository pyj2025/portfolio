import React from 'react';

import {
  TopbarBtn,
  TopbarBtnContainer,
  TopbarTitle,
  TopbarTitleText,
  WindowTopbarContainer,
} from '../GlobalStyle';
import { WindowPositionSetting, WindowSizeSetting } from '../types';
import useScreenSize from '../utils/useScreenSize';
import { IconType, SMALL_ICON_SIZE, getIcon } from './getIcon';
import useWindowsStore from '../utils/useWindowsStore';
import useAboutStore from '../utils/useAboutStore';
import useSkillsStore from '../utils/useSkillsStore';
import useProjectsStore from '../utils/useProjectsStore';

export type WindowTopbarProps = {
  title: string;
  windowRef: any;
  size: WindowSizeSetting;
  setSize: (size: WindowSizeSetting) => void;
  position: WindowPositionSetting;
  setPosition: (position: WindowPositionSetting) => void;
  prevSetting: (WindowSizeSetting & WindowPositionSetting) | null;
  setPrevSetting: (setting: WindowSizeSetting & WindowPositionSetting) => void;
  isMobileWindow: boolean;
};

const WindowTopbar: React.FC<WindowTopbarProps> = ({
  title,
  windowRef,
  size,
  setSize,
  position,
  setPosition,
  prevSetting,
  setPrevSetting,
  isMobileWindow,
}) => {
  const { width, height } = useScreenSize();
  const focusedWindow = useWindowsStore((state) => state.focusedWindow);

  const {
    isAboutExpanded,
    toggleAboutOpen,
    toggleAboutExpanded,
    setAboutMinimized,
  } = useAboutStore((state) => state);

  const {
    isSkillsExpanded,
    toggleSkillsOpen,
    toggleSkillsExpanded,
    setSkillsMinimized,
  } = useSkillsStore((state) => state);

  const {
    isProjectsExpanded,
    toggleProjectsOpen,
    toggleProjectsExpanded,
    setProjectsMinimized,
  } = useProjectsStore((state) => state);

  const [image, setImage] = React.useState<IconType>('');

  React.useEffect(() => {
    switch (title) {
      case 'About': {
        setImage('About');
        break;
      }
      case 'Skills': {
        setImage('Skills');
        break;
      }
      case 'Projects': {
        setImage('Projects');
        break;
      }
      default:
        break;
    }
  }, [title]);

  const handleClose = React.useCallback(() => {
    if (focusedWindow === title) {
      switch (title) {
        case 'About': {
          toggleAboutOpen();
          break;
        }
        case 'Skills': {
          toggleSkillsOpen();
          break;
        }
        case 'Projects': {
          toggleProjectsOpen();
          break;
        }
        default:
          break;
      }
    }
  }, [
    focusedWindow,
    title,
    toggleAboutOpen,
    toggleProjectsOpen,
    toggleSkillsOpen,
  ]);

  const handleMinimized = React.useCallback(() => {
    if (focusedWindow === title) {
      switch (title) {
        case 'About': {
          setAboutMinimized(true);
          toggleAboutOpen();
          break;
        }
        case 'Skills': {
          setSkillsMinimized(true);
          toggleSkillsOpen();
          break;
        }
        case 'Projects': {
          setProjectsMinimized(true);
          toggleProjectsOpen();
          break;
        }
        default:
          break;
      }
    }
  }, [
    focusedWindow,
    setAboutMinimized,
    setProjectsMinimized,
    setSkillsMinimized,
    title,
    toggleAboutOpen,
    toggleProjectsOpen,
    toggleSkillsOpen,
  ]);

  const expand = React.useCallback(
    (isExpanded: boolean) => {
      if (isExpanded) {
        if (prevSetting === null) {
          setSize({
            width: 500,
            height: 300,
          });
          setPosition({
            x: 20,
            y: 20,
          });
        } else {
          setSize({
            width: prevSetting.width,
            height: prevSetting.height,
          });
          setPosition({
            x: prevSetting.x,
            y: prevSetting.y,
          });
        }
      } else {
        setPrevSetting({
          width: size.width,
          height: size.height,
          x: position.x,
          y: position.y,
        });

        // 28 is windowTopbar height
        setSize({
          width: width,
          height: height - 28,
        });
        setPosition({
          x: 0,
          y: 0,
        });
      }
      windowRef?.current.updateSize(size);
      windowRef?.current.updatePosition(position);
    },
    [
      height,
      position,
      prevSetting,
      setPosition,
      setPrevSetting,
      setSize,
      size,
      width,
      windowRef,
    ]
  );

  const handleExpand = React.useCallback(() => {
    if (focusedWindow === title) {
      switch (title) {
        case 'About': {
          expand(isAboutExpanded);
          toggleAboutExpanded();
          break;
        }
        case 'Skills': {
          expand(isSkillsExpanded);
          toggleSkillsExpanded();
          break;
        }
        case 'Projects': {
          expand(isProjectsExpanded);
          toggleProjectsExpanded();
          break;
        }
        default:
          break;
      }
    }
  }, [
    expand,
    focusedWindow,
    isAboutExpanded,
    isProjectsExpanded,
    isSkillsExpanded,
    title,
    toggleAboutExpanded,
    toggleProjectsExpanded,
    toggleSkillsExpanded,
  ]);

  return (
    <WindowTopbarContainer className="topbar">
      <TopbarBtnContainer>
        <TopbarBtn
          color="close"
          title={focusedWindow === title ? 'Close' : undefined}
          onClick={handleClose}
          onTouchStart={handleClose}
          disabled={focusedWindow !== title}
        />
        <TopbarBtn
          color="minimize"
          title={
            focusedWindow === title && !isMobileWindow ? 'Minimize' : undefined
          }
          onClick={!isMobileWindow ? handleMinimized : undefined}
          disabled={focusedWindow !== title || isMobileWindow}
        />
        <TopbarBtn
          color="expand"
          title={
            focusedWindow === title && !isMobileWindow ? 'Expand' : undefined
          }
          onClick={!isMobileWindow ? handleExpand : undefined}
          disabled={focusedWindow !== title || isMobileWindow}
        />
      </TopbarBtnContainer>
      <TopbarTitle>
        {getIcon(image, SMALL_ICON_SIZE)}
        <TopbarTitleText>{title}</TopbarTitleText>
      </TopbarTitle>
    </WindowTopbarContainer>
  );
};

export default WindowTopbar;
