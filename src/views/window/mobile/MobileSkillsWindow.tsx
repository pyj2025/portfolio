import React from "react";
import { DraggableData, Position, ResizableDelta } from "react-rnd";
import { WindowPositionSetting, WindowSizeSetting } from "../../../types";
import { Window } from "../../../GlobalStyle";

import useScreenSize, { TABLET_MAX_WIDTH } from "../../../utils/useScreenSize";
import { WindowProps } from "../../BodyContent";
import WindowTopbar from "../../../components/WindowTopbar";
import FrontEnd from "../../../components/skills/FrontEnd";
import BackEnd from "../../../components/skills/BackEnd";
import Mobile from "../../../components/skills/Mobile";
import ProgrammingLanguage from "../../../components/skills/ProgrammingLanguage";
import styled from "styled-components";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type MobileIndexType = "Menu" | "Front" | "Back" | "Mobile" | "Programming";

const NewWindowBodyNavItm = styled.div<{
  focus: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ focus }) =>
    focus ? "rgba(120, 120, 120, 0.5)" : "transparent"};
  color: white;
  width: 100%;
  height: 3rem;
  cursor: pointer;
`;

const MobileAboutWindowMenuItem = styled.div<{
  isEven?: boolean;
}>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ isEven }) => (isEven ? "transparent" : "#28292a")};
  color: white;
  padding: 0.25rem 0.5rem;
  width: 100%;
  height: 3rem;
  cursor: pointer;
`;

const MobileMenuItemLabel = styled.div`
  font-weight: bold;
  margin-left: 1rem;
`;

const MobileNavbarMenu = styled.img`
  height: 1.5rem;
  width: 1.5rem;
`;

const NewWindowBody2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: calc(100% - 28px);
`;

const WindowBodyNavbar2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 3rem;
  background-color: rgba(51, 49, 51, 0.9);
  color: white;
  border-right: 0.2px solid #141516;
  border-bottom-left-radius: 6px;
`;

const WindowBodyContent2 = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1d1f21;
  color: white;
  border-bottom-right-radius: 6px;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const MobileContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: white;
  border-bottom-right-radius: 6px;
`;

const MobileCloseButtonContainer = styled.div`
  display: flex;
  color: white;
  justify-content: flex-end;
  align-items: center;
  height: 1.5rem;
  padding-right: 0.5rem;
`;

const MobileCloseButton = styled.div`
  margin-top: 0.75rem;
  padding: 0.5rem;
`;

type MobileWindowMenuProps = {
  onClick: (index: MobileIndexType) => void;
};

const MobileSkillsWindowMenu: React.FC<MobileWindowMenuProps> = ({
  onClick,
}) => {
  return (
    <>
      <MobileAboutWindowMenuItem onClick={() => onClick("Front")}>
        <img
          src="https://img.icons8.com/color/48/000000/mac-folder.png"
          alt="folder"
        />
        <MobileMenuItemLabel>Front-End</MobileMenuItemLabel>
      </MobileAboutWindowMenuItem>
      <MobileAboutWindowMenuItem onClick={() => onClick("Back")} isEven>
        <img
          src="https://img.icons8.com/color/48/000000/mac-folder.png"
          alt="folder"
        />
        <MobileMenuItemLabel>Back-End</MobileMenuItemLabel>
      </MobileAboutWindowMenuItem>
      <MobileAboutWindowMenuItem onClick={() => onClick("Mobile")}>
        <img
          src="https://img.icons8.com/color/48/000000/code-file.png"
          alt="folder"
        />
        <MobileMenuItemLabel>Mobile</MobileMenuItemLabel>
      </MobileAboutWindowMenuItem>
      <MobileAboutWindowMenuItem onClick={() => onClick("Programming")} isEven>
        <img
          src="https://img.icons8.com/color/48/000000/google-code.png"
          alt="folder"
        />
        <MobileMenuItemLabel>Programming Language</MobileMenuItemLabel>
      </MobileAboutWindowMenuItem>
    </>
  );
};

const MobileSkillsWindow: React.FC<WindowProps> = ({ handleFocus }) => {
  const { width, height } = useScreenSize();

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
  const [index, setIndex] = React.useState<MobileIndexType>("Menu");
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

  const handleClick = (name: MobileIndexType) => {
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
      <NewWindowBody2>
        <WindowBodyNavbar2>
          <NewWindowBodyNavItm
            title="Front-End"
            onClick={() => handleClick("Front")}
            focus={index === "Front"}
          >
            <MobileNavbarMenu
              src="https://img.icons8.com/color/48/000000/mac-folder.png"
              alt="folder"
            />
          </NewWindowBodyNavItm>
          <NewWindowBodyNavItm
            title="Back-End"
            onClick={() => handleClick("Back")}
            focus={index === "Back"}
          >
            <MobileNavbarMenu
              src="https://img.icons8.com/color/48/000000/mac-folder.png"
              alt="folder"
            />
          </NewWindowBodyNavItm>
          <NewWindowBodyNavItm
            title="Mobile"
            onClick={() => handleClick("Mobile")}
            focus={index === "Mobile"}
          >
            <MobileNavbarMenu
              src="https://img.icons8.com/color/48/000000/code-file.png"
              alt="folder"
            />
          </NewWindowBodyNavItm>
          <NewWindowBodyNavItm
            title="Programming Language"
            onClick={() => handleClick("Programming")}
            focus={index === "Programming"}
          >
            <MobileNavbarMenu
              src="https://img.icons8.com/color/48/000000/google-code.png"
              alt="folder"
            />
          </NewWindowBodyNavItm>
        </WindowBodyNavbar2>
        <WindowBodyContent2>
          {index === "Menu" ? (
            <MobileSkillsWindowMenu onClick={handleClick} />
          ) : (
            <MobileContentContainer>
              <MobileCloseButtonContainer>
                <MobileCloseButton onClick={() => handleClick("Menu")}>
                  <FontAwesomeIcon icon={faTimes} />
                </MobileCloseButton>
              </MobileCloseButtonContainer>
              {index === "Front" && <FrontEnd />}
              {index === "Back" && <BackEnd />}
              {index === "Mobile" && <Mobile />}
              {index === "Programming" && <ProgrammingLanguage />}
            </MobileContentContainer>
          )}
        </WindowBodyContent2>
      </NewWindowBody2>
    </Window>
  );
};

export default MobileSkillsWindow;
