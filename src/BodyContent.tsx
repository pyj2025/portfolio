import React from "react";
import styled from "styled-components";
import { Rnd } from "react-rnd";
import { faCode, faFolder, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  background-color: #3c3c3c;
  color: white;
`;

const MacWindow = styled(Rnd)`
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0px 0px 8px black;
`;

const TerminalTopbar = styled.div`
  width: 100%;
  height: 28px;
  background-color: rgb(51, 52, 54);
  border-top: 1px rgb(70, 75, 80) solid;

  padding: 0px 10px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  cursor: default;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  align-items: center;
  box-sizing: border-box;
`;

const TerminalBtnContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const TerminalBtn = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  font-size: 9px;
  color: #62574c;
  display: inline-block;
  margin-left: ${({ color }: { color: string }) =>
    color === "close" ? "0px" : "8px"};
  border-radius: 8px;
  align-items: center;
  vertical-align: middle;
  background-color: ${({ color }: { color: string }) =>
    color === "minimize"
      ? "#F7BD45"
      : color === "expand"
      ? "#5FCB43"
      : "#ee514a"};
  cursor: pointer;
`;

const TopbarTitle = styled.div`
  text-align: center;
`;

const TopbarTitleText = styled.span`
  margin-left: 6px;
  pointer-events: none;
`;

export type BodyContentProps = {
  isAboutOpen: boolean;
  isSkillsOpen: boolean;
  isProjectsOpen: boolean;
  toggleAboutOpen: () => void;
  setAboutMinimized: (flag: boolean) => void;
  toggleSkillsOpen: () => void;
  setSkillsMinimized: (flag: boolean) => void;
  toggleProjectsOpen: () => void;
  setProjectsMinimized: (flag: boolean) => void;
};

const BodyContent: React.FC<BodyContentProps> = ({
  isAboutOpen,
  isSkillsOpen,
  isProjectsOpen,
  toggleAboutOpen,
  setAboutMinimized,
  toggleSkillsOpen,
  setSkillsMinimized,
  toggleProjectsOpen,
  setProjectsMinimized,
}) => {
  const windowRef = React.useRef({
    newZIndex: "10",
    prevNode: null as unknown as HTMLElement,
    prevZIndex: null as unknown as string,
  });

  const handleAboutMinimized = () => {
    setAboutMinimized(true);
    toggleAboutOpen();
  };

  const handleSkillsMinimized = () => {
    setSkillsMinimized(true);
    toggleSkillsOpen();
  };

  const handleProjectsMinimized = () => {
    setProjectsMinimized(true);
    toggleProjectsOpen();
  };

  const handleFocus = (_e: any, node: { node: HTMLElement }) => {
    const ref = windowRef.current;

    if (windowRef.current.prevNode) {
      ref.prevNode.style.zIndex = ref.prevZIndex;
    }

    ref.prevNode = node.node;
    ref.prevZIndex = ref.prevNode.style.zIndex;
    ref.prevNode.style.zIndex = ref.newZIndex;
  };

  return (
    <Container>
      {isAboutOpen ? (
        <MacWindow
          default={{
            x: 40,
            y: -550,
            width: 500,
            height: 300,
          }}
          dragHandleClassName="topbar"
          minWidth={500}
          minHeight={300}
          onDragStart={handleFocus}
        >
          <TerminalTopbar className="topbar">
            <TerminalBtnContainer>
              <TerminalBtn
                color="close"
                title="Close"
                onClick={toggleAboutOpen}
              ></TerminalBtn>
              <TerminalBtn
                color="minimize"
                title="Minimize"
                onClick={handleAboutMinimized}
              ></TerminalBtn>
              <TerminalBtn
                color="expand"
                title="Expand"
                onClick={toggleAboutOpen}
              ></TerminalBtn>
            </TerminalBtnContainer>
            <TopbarTitle>
              <FontAwesomeIcon icon={faUser} />
              <TopbarTitleText>About</TopbarTitleText>
            </TopbarTitle>
          </TerminalTopbar>
          <div>Body</div>
        </MacWindow>
      ) : null}
      {isSkillsOpen ? (
        <MacWindow
          default={{
            x: 100,
            y: -600,
            width: 500,
            height: 300,
          }}
          dragHandleClassName="topbar"
          minWidth={500}
          minHeight={300}
          onDragStart={handleFocus}
        >
          <TerminalTopbar className="topbar">
            <TerminalBtnContainer>
              <TerminalBtn
                color="close"
                title="Close"
                onClick={toggleSkillsOpen}
              ></TerminalBtn>
              <TerminalBtn
                color="minimize"
                title="Minimize"
                onClick={handleSkillsMinimized}
              ></TerminalBtn>
              <TerminalBtn
                color="expand"
                title="Expand"
                onClick={toggleSkillsOpen}
              ></TerminalBtn>
            </TerminalBtnContainer>
            <TopbarTitle>
              <FontAwesomeIcon icon={faCode} />
              <TopbarTitleText>Skills</TopbarTitleText>
            </TopbarTitle>
          </TerminalTopbar>
          <div>Body</div>
        </MacWindow>
      ) : null}
      {isProjectsOpen ? (
        <MacWindow
          default={{
            x: 0,
            y: -200,
            width: 500,
            height: 300,
          }}
          dragHandleClassName="topbar"
          minWidth={500}
          minHeight={300}
          onDragStart={handleFocus}
        >
          <TerminalTopbar className="topbar">
            <TerminalBtnContainer>
              <TerminalBtn
                color="close"
                title="Close"
                onClick={toggleProjectsOpen}
              ></TerminalBtn>
              <TerminalBtn
                color="minimize"
                title="Minimize"
                onClick={handleProjectsMinimized}
              ></TerminalBtn>
              <TerminalBtn
                color="expand"
                title="Expand"
                onClick={toggleProjectsOpen}
              ></TerminalBtn>
            </TerminalBtnContainer>
            <TopbarTitle>
              <FontAwesomeIcon icon={faFolder} />
              <TopbarTitleText>Projects</TopbarTitleText>
            </TopbarTitle>
          </TerminalTopbar>
          <div>Body</div>
        </MacWindow>
      ) : null}
    </Container>
  );
};

export default BodyContent;
