import React from "react";
import { DraggableData, Position, ResizableDelta, Rnd } from "react-rnd";
import { WindowPositionSetting, WindowSizeSetting } from "../../types";
import {
  NavItmLabel,
  NewWindowBody,
  TopbarTitleImage,
  Window,
  WindowBody,
  WindowBodyContent,
  WindowBodyNavbar,
  WindowBodyNavItm,
} from "../../GlobalStyle";

import useScreenSize, { TABLET_MAX_WIDTH } from "../../utils/useScreenSize";
import { WindowProps } from "../BodyContent";
import WindowTopbar from "../../components/WindowTopbar";
import FrontEnd from "../../components/skills/FrontEnd";
import BackEnd from "../../components/skills/BackEnd";
import Mobile from "../../components/skills/Mobile";
import ProgrammingLanguage from "../../components/skills/ProgrammingLanguage";
import styled from "styled-components";

type IndexType = "Front" | "Back" | "Mobile" | "Programming";

const NewWindowBodyNavItm = styled.div``;

const SkillsWindow: React.FC<WindowProps> = ({ handleFocus }) => {
  const { width, height } = useScreenSize();

  const skillsRef = React.useRef<any>();

  const [windowNavbarSize, setWindowNavbarSize] =
    React.useState<WindowSizeSetting>({
      width: 150,
      height: 300,
    });

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

  const handleClick = (name: IndexType) => {
    setIndex(name);
  };

  // console.log("windowNavbarSize.width = ", windowNavbarSize.width);
  return (
    <Window
      id="Skills"
      ref={skillsRef}
      size={{ width: skillsSize.width, height: skillsSize.height }}
      position={{ x: skillsPosition.x, y: skillsPosition.y }}
      dragHandleClassName="topbar"
      minWidth={isMobileWindow ? width : 525}
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
      <NewWindowBody navbarWidth={windowNavbarSize.width}>
        <WindowBodyNavbar>
          <Rnd
            default={{
              x: 0,
              y: 0,
              width: windowNavbarSize.width,
              height: windowNavbarSize.height,
            }}
            minWidth={50}
            maxWidth={150}
            enableResizing={{
              top: false,
              right: true,
              bottom: false,
              left: false,
              topRight: false,
              bottomRight: false,
              bottomLeft: false,
              topLeft: false,
            }}
            onResize={(
              _e: MouseEvent | TouchEvent,
              _dir: any,
              ref: any,
              _delta: ResizableDelta,
              position: Position
            ) => {
              const newWidth = Number(
                ref.style.width.substring(0, ref.style.width.indexOf("p"))
              );
              const newHeight = Number(
                ref.style.height.substring(0, ref.style.height.indexOf("p"))
              );

              setWindowNavbarSize({
                width: newWidth,
                height: newHeight,
              });
            }}
            disableDragging
          >
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
          </Rnd>
        </WindowBodyNavbar>
        <WindowBodyContent>
          {index === "Front" ? <FrontEnd /> : null}
          {index === "Back" ? <BackEnd /> : null}
          {index === "Mobile" ? <Mobile /> : null}
          {index === "Programming" ? <ProgrammingLanguage /> : null}
        </WindowBodyContent>
      </NewWindowBody>
    </Window>
  );
};

export default SkillsWindow;
