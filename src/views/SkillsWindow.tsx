import React from "react";
import styled from "styled-components";
import { DraggableData, Position, ResizableDelta, Rnd } from "react-rnd";
import { WindowPositionSetting, WindowSizeSetting } from "./AboutWindow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

const Window = styled(Rnd)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  box-shadow: 0px 0px 8px black;
`;

const WindowTopbar = styled.div`
  width: 100%;
  height: 28px;
  background-color: rgb(51, 52, 54);
  border-top: 1px solid rgb(70, 75, 80);
  padding: 0px 10px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  cursor: default;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 0.2px solid #141516;
`;

const TopbarBtnContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const TopbarBtn = styled.div<{ color: string; disabled: boolean }>`
  width: 12px;
  height: 12px;
  color: #62574c;
  display: inline-block;
  margin-left: ${({ color }: { color: string }) =>
    color === "close" ? "0px" : "8px"};
  border-radius: 8px;
  align-items: center;
  vertical-align: middle;
  background-color: ${({
    color,
    disabled,
  }: {
    color: string;
    disabled: boolean;
  }) =>
    disabled
      ? "#686B6D"
      : color === "minimize"
      ? "#F7BD45"
      : color === "expand"
      ? "#5FCB43"
      : "#ee514a"};
  cursor: ${({ disabled }: { disabled: boolean }) =>
    disabled ? undefined : "pointer"};
`;

const TopbarTitleImage = styled.img`
  width: 16px;
  height: 16px;
`;

const TopbarTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 14px;
`;

const TopbarTitleText = styled.span`
  margin-left: 6px;
  pointer-events: none;
`;

const WindowBody = styled.div`
  display: grid;
  grid-template-columns: 150px auto;
  width: 100%;
  height: calc(100% - 28px);
`;

const WindowBodyNavbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  background-color: rgba(51, 49, 51, 0.9);
  color: white;
  border-right: 0.2px solid #141516;
`;

const WindowBodyNavItm = styled.div<{ first?: boolean }>`
  display: grid;
  grid-template-columns: 20px auto;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  color: white;
  margin-top: ${({ first }) => (first ? "4px" : "2px")};
  margin-left: 8px;
  cursor: pointer;
`;

const NavItmLabel = styled.span`
  font-weight: bold;
  justify-content: center;
  margin-left: 4px;
`;

const WindowBodyContent = styled.div`
  height: 100%;
  background-color: #1d1f21;
  color: white;
`;

type IndexType = "Front" | "Back" | "Mobile" | "Programming";

type SkillsWindowProps = {
  width: number;
  height: number;
  focusedWindow: string;
  handleFocus: (_e: any, data: DraggableData) => void;
  isSkillsExpanded: boolean;
  setSkillsMinimized: (flag: boolean) => void;
  toggleSkillsOpen: () => void;
  toggleSkillsExpanded: () => void;
};

const SkillsWindow: React.FC<SkillsWindowProps> = ({
  width,
  height,
  focusedWindow,
  handleFocus,
  isSkillsExpanded,
  setSkillsMinimized,
  toggleSkillsOpen,
  toggleSkillsExpanded,
}) => {
  const skillsRef = React.useRef<any>();

  const [skillsSize, setSkillsSize] = React.useState<WindowSizeSetting>({
    width: 500,
    height: 300,
  });
  const [skillsPosition, setSkillsPosition] =
    React.useState<WindowPositionSetting>({
      x: 40,
      y: -600,
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
            x: 40,
            y: -600,
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
          y: -1 * height,
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
      minWidth={500}
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
          <WindowBodyNavItm first onClick={() => handleClick("Front")}>
            <TopbarTitleImage
              src="https://img.icons8.com/color/48/000000/mac-folder.png"
              alt="folder"
            />
            <NavItmLabel>Front-End</NavItmLabel>
          </WindowBodyNavItm>
          <WindowBodyNavItm onClick={() => handleClick("Back")}>
            <TopbarTitleImage
              src="https://img.icons8.com/color/48/000000/mac-folder.png"
              alt="folder"
            />
            <NavItmLabel>Back-End</NavItmLabel>
          </WindowBodyNavItm>
          <WindowBodyNavItm onClick={() => handleClick("Mobile")}>
            <TopbarTitleImage
              src="https://img.icons8.com/color/48/000000/code-file.png"
              alt="folder"
            />
            <NavItmLabel>Mobile</NavItmLabel>
          </WindowBodyNavItm>
          <WindowBodyNavItm onClick={() => handleClick("Programming")}>
            <TopbarTitleImage
              src="https://img.icons8.com/color/48/000000/google-code.png"
              alt="folder"
            />
            <NavItmLabel>Language</NavItmLabel>
          </WindowBodyNavItm>
        </WindowBodyNavbar>
        <WindowBodyContent>
          {index === "Front" ? (
            <>
              <div>Front</div>
              <div>React, Angular, Vue, jQuery, , Redux, SASS, Bootstrap</div>
            </>
          ) : null}
          {index === "Back" ? (
            <>
              <div>Back</div>
              <div>
                ASP.Net Core, Node.js, Laravel, Express, MongoDB, Spring Boot
              </div>
            </>
          ) : null}
          {index === "Mobile" ? (
            <>
              <div>Mobile</div>
              <div>React-Native, Swift</div>
            </>
          ) : null}
          {index === "Programming" ? (
            <>
              <div>Programming Language</div>
              <div>
                JavaScript, Java, Python, C#, C/C++, SQL, PHP, MySQL, PL/SQL,
                HTML5, CSS3, TypeScript, R
              </div>
            </>
          ) : null}
        </WindowBodyContent>
      </WindowBody>
    </Window>
  );
};

export default SkillsWindow;
