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
import useCalculatorStore from '../utils/useCalculatorStore';
import useUtilStore from '../utils/useUtilStore';
import useResumeStore from '../utils/useResumeStore';

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

  const { toggleCalculatorOpen, setCalculatorMinimized } = useCalculatorStore(
    (state) => state,
  );

  const {
    isUtilExpanded,
    toggleUtilOpen,
    toggleUtilExpanded,
    setUtilMinimized,
  } = useUtilStore((state) => state);

  const {
    isResumeExpanded,
    toggleResumeOpen,
    toggleResumeExpanded,
    setResumeMinimized,
  } = useResumeStore((state) => state);

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
      case 'Calculator': {
        setImage('Calculator');
        break;
      }
      case 'Utils': {
        setImage('Folder');
        break;
      }
      case 'Resume': {
        setImage('Resume');
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
        case 'Calculator': {
          toggleCalculatorOpen();
          break;
        }
        case 'Utils': {
          toggleUtilOpen();
          break;
        }
        case 'Resume': {
          toggleResumeOpen();
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
    toggleCalculatorOpen,
    toggleUtilOpen,
    toggleResumeOpen,
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
        case 'Calculator': {
          setCalculatorMinimized(true);
          toggleCalculatorOpen();
          break;
        }
        case 'Utils': {
          setUtilMinimized(true);
          toggleUtilOpen();
          break;
        }
        case 'Resume': {
          setResumeMinimized(true);
          toggleResumeOpen();
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
    setCalculatorMinimized,
    setUtilMinimized,
    setResumeMinimized,
    title,
    toggleAboutOpen,
    toggleProjectsOpen,
    toggleSkillsOpen,
    toggleCalculatorOpen,
    toggleUtilOpen,
    toggleResumeOpen,
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

        // 36 is windowTopbar height
        setSize({
          width: width,
          height: height - 36,
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
        case 'Utils': {
          expand(isUtilExpanded);
          toggleUtilExpanded();
          break;
        }
        case 'Resume': {
          expand(isResumeExpanded);
          toggleResumeExpanded();
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
    isUtilExpanded,
    isResumeExpanded,
    title,
    toggleAboutExpanded,
    toggleProjectsExpanded,
    toggleSkillsExpanded,
    toggleUtilExpanded,
    toggleResumeExpanded,
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
