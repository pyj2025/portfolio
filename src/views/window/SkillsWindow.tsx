import React from "react";
import { DraggableData, Position, ResizableDelta } from "react-rnd";
import { WindowPositionSetting, WindowSizeSetting } from "../../types";
import {
  NavItmLabel,
  TopbarBtn,
  TopbarBtnContainer,
  TopbarTitle,
  TopbarTitleImage,
  TopbarTitleText,
  Window,
  WindowBody,
  WindowBodyContent,
  WindowBodyNavbar,
  WindowBodyNavItm,
  WindowTopbar,
} from "../../GlobalStyle";
import {
  BackEnd,
  FrontEnd,
  Mobile,
  ProgrammingLanguage,
} from "../../components/Skills";
import useScreenSize from "../../utils/useScreenSize";
import { useWindows } from "../../utils/context/context";

type IndexType = "Front" | "Back" | "Mobile" | "Programming";

type SkillsWindowProps = {
  handleFocus: (_e: any, data: DraggableData) => void;
};

const SkillsWindow: React.FC<SkillsWindowProps> = ({ handleFocus }) => {
  const { width, height } = useScreenSize();
  const {
    focusedWindow,
    isSkillsExpanded,
    setSkillsMinimized,
    toggleSkillsOpen,
    toggleSkillsExpanded,
  } = useWindows();

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
  const [index, setIndex] = React.useState<IndexType>("Front");

  const handleSkillsClose = () => {
    if (focusedWindow === "Skills") toggleSkillsOpen();
  };

  const handleSkillsMinimized = () => {
    if (focusedWindow === "Skills") {
      setSkillsMinimized(true);
      toggleSkillsOpen();
    }
  };

  const handleSkillsExpand = () => {
    if (focusedWindow === "Skills") {
      if (isSkillsExpanded) {
        if (skillsPrevSetting === null) {
          setSkillsSize({
            width: 500,
            height: 300,
          });
          setSkillsPosition({
            x: 60,
            y: 60,
          });
        } else {
          setSkillsSize({
            width: skillsPrevSetting.width,
            height: skillsPrevSetting.height,
          });
          setSkillsPosition({
            x: skillsPrevSetting.x,
            y: skillsPrevSetting.y,
          });
        }
      } else {
        setSkillsPrevSetting({
          width: skillsSize.width,
          height: skillsSize.height,
          x: skillsPosition.x,
          y: skillsPosition.y,
        });

        setSkillsSize({
          width: width,
          height: height,
        });
        setSkillsPosition({
          x: 0,
          y: 0,
        });
      }
      skillsRef.current.updateSize(skillsSize);
      skillsRef.current.updatePosition(skillsPosition);

      toggleSkillsExpanded();
    }
  };

  const handleClick = (name: IndexType) => {
    setIndex(name);
  };

  return (
    <Window
      id="Skills"
      ref={skillsRef}
      size={{ width: skillsSize.width, height: skillsSize.height }}
      position={{ x: skillsPosition.x, y: skillsPosition.y }}
      dragHandleClassName="topbar"
      minWidth={525}
      minHeight={300}
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
      <WindowTopbar className="topbar">
        <TopbarBtnContainer>
          <TopbarBtn
            color="close"
            title={focusedWindow === "Skills" ? "Close" : undefined}
            onClick={handleSkillsClose}
            disabled={focusedWindow !== "Skills"}
          />
          <TopbarBtn
            color="minimize"
            title={focusedWindow === "Skills" ? "Minimize" : undefined}
            onClick={handleSkillsMinimized}
            disabled={focusedWindow !== "Skills"}
          />
          <TopbarBtn
            color="expand"
            title={focusedWindow === "Skills" ? "Expand" : undefined}
            onClick={handleSkillsExpand}
            disabled={focusedWindow !== "Skills"}
          />
        </TopbarBtnContainer>
        <TopbarTitle>
          <TopbarTitleImage
            src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png"
            alt="Skills"
          />
          <TopbarTitleText>Skills</TopbarTitleText>
        </TopbarTitle>
      </WindowTopbar>
      <WindowBody>
        <WindowBodyNavbar>
          <WindowBodyNavItm
            first
            onClick={() => handleClick("Front")}
            focus={index === "Front"}
          >
            <TopbarTitleImage
              src="https://img.icons8.com/color/48/000000/mac-folder.png"
              alt="folder"
            />
            <NavItmLabel>Front-End</NavItmLabel>
          </WindowBodyNavItm>
          <WindowBodyNavItm
            onClick={() => handleClick("Back")}
            focus={index === "Back"}
          >
            <TopbarTitleImage
              src="https://img.icons8.com/color/48/000000/mac-folder.png"
              alt="folder"
            />
            <NavItmLabel>Back-End</NavItmLabel>
          </WindowBodyNavItm>
          <WindowBodyNavItm
            onClick={() => handleClick("Mobile")}
            focus={index === "Mobile"}
          >
            <TopbarTitleImage
              src="https://img.icons8.com/color/48/000000/code-file.png"
              alt="folder"
            />
            <NavItmLabel>Mobile</NavItmLabel>
          </WindowBodyNavItm>
          <WindowBodyNavItm
            onClick={() => handleClick("Programming")}
            focus={index === "Programming"}
          >
            <TopbarTitleImage
              src="https://img.icons8.com/color/48/000000/google-code.png"
              alt="folder"
            />
            <NavItmLabel>Language</NavItmLabel>
          </WindowBodyNavItm>
        </WindowBodyNavbar>
        <WindowBodyContent>
          {index === "Front" ? <FrontEnd /> : null}
          {index === "Back" ? <BackEnd /> : null}
          {index === "Mobile" ? <Mobile /> : null}
          {index === "Programming" ? <ProgrammingLanguage /> : null}
        </WindowBodyContent>
      </WindowBody>
    </Window>
  );
};

export default SkillsWindow;
