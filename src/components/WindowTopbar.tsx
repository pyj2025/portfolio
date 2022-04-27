import React from "react";

import {
  TopbarBtn,
  TopbarBtnContainer,
  TopbarTitle,
  TopbarTitleImage,
  TopbarTitleText,
  WindowTopbarContainer,
} from "../GlobalStyle";
import { WindowPositionSetting, WindowSizeSetting } from "../types";
import { useWindows } from "../utils/context/context";
import useScreenSize from "../utils/useScreenSize";

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
  const {
    focusedWindow,
    isAboutExpanded,
    isSkillsExpanded,
    isProjectsExpanded,
    toggleAboutOpen,
    toggleSkillsOpen,
    toggleProjectsOpen,
    setAboutMinimized,
    setSkillsMinimized,
    setProjectsMinimized,
    toggleAboutExpanded,
    toggleSkillsExpanded,
    toggleProjectsExpanded,
  } = useWindows();

  const [image, setImage] = React.useState<string>("");

  React.useEffect(() => {
    switch (title) {
      case "About": {
        setImage("https://img.icons8.com/color/48/000000/mac-logo.png");
        break;
      }
      case "Skills": {
        setImage(
          "https://img.icons8.com/color/48/000000/visual-studio-code-2019.png"
        );
        break;
      }
      case "Projects": {
        setImage("https://img.icons8.com/color/48/000000/mac-folder.png");
        break;
      }
      default:
        break;
    }
  }, [title]);

  const handleClose = () => {
    if (focusedWindow === title) {
      switch (title) {
        case "About": {
          toggleAboutOpen();
          break;
        }
        case "Skills": {
          toggleSkillsOpen();
          break;
        }
        case "Projects": {
          toggleProjectsOpen();
          break;
        }
        default:
          break;
      }
    }
  };

  const handleMinimized = () => {
    if (focusedWindow === title) {
      switch (title) {
        case "About": {
          setAboutMinimized(true);
          toggleAboutOpen();
          break;
        }
        case "Skills": {
          setSkillsMinimized(true);
          toggleSkillsOpen();
          break;
        }
        case "Projects": {
          setProjectsMinimized(true);
          toggleProjectsOpen();
          break;
        }
        default:
          break;
      }
    }
  };

  const handleExpand = () => {
    if (focusedWindow === title) {
      switch (title) {
        case "About": {
          expand(isAboutExpanded);
          toggleAboutExpanded();
          break;
        }
        case "Skills": {
          expand(isSkillsExpanded);
          toggleSkillsExpanded();
          break;
        }
        case "Projects": {
          expand(isProjectsExpanded);
          toggleProjectsExpanded();
          break;
        }
        default:
          break;
      }
    }
  };

  const expand = (isExpanded: boolean) => {
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
  };

  return (
    <WindowTopbarContainer className="topbar">
      <TopbarBtnContainer>
        <TopbarBtn
          color="close"
          title={focusedWindow === title ? "Close" : undefined}
          onClick={handleClose}
          onTouchStart={handleClose}
          disabled={focusedWindow !== title}
        />
        <TopbarBtn
          color="minimize"
          title={
            focusedWindow === title && !isMobileWindow ? "Minimize" : undefined
          }
          onClick={!isMobileWindow ? handleMinimized : undefined}
          disabled={focusedWindow !== title || isMobileWindow}
        />
        <TopbarBtn
          color="expand"
          title={
            focusedWindow === title && !isMobileWindow ? "Expand" : undefined
          }
          onClick={!isMobileWindow ? handleExpand : undefined}
          disabled={focusedWindow !== title || isMobileWindow}
        />
      </TopbarBtnContainer>
      <TopbarTitle>
        <TopbarTitleImage src={image} alt={title} />
        <TopbarTitleText>{title}</TopbarTitleText>
      </TopbarTitle>
    </WindowTopbarContainer>
  );
};

export default WindowTopbar;
