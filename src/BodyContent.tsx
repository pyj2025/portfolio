import React from "react";
import styled from "styled-components";
import { Rnd } from "react-rnd";

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

const TerminalBtn = styled.div<{ color: string; disabled: boolean }>`
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

export type BodyContentProps = {
  focusedWindow: string;
  isAboutOpen: boolean;
  isSkillsOpen: boolean;
  isProjectsOpen: boolean;
  toggleAboutOpen: () => void;
  setAboutMinimized: (flag: boolean) => void;
  toggleSkillsOpen: () => void;
  setSkillsMinimized: (flag: boolean) => void;
  toggleProjectsOpen: () => void;
  setProjectsMinimized: (flag: boolean) => void;
  setFocusedWindow: (name: string) => void;
};

const BodyContent: React.FC<BodyContentProps> = ({
  focusedWindow,
  isAboutOpen,
  isSkillsOpen,
  isProjectsOpen,
  toggleAboutOpen,
  setAboutMinimized,
  toggleSkillsOpen,
  setSkillsMinimized,
  toggleProjectsOpen,
  setProjectsMinimized,
  setFocusedWindow,
}) => {
  const windowRef = React.useRef({
    newZIndex: "10",
    prevNode: null as unknown as HTMLElement,
    prevZIndex: null as unknown as string,
  });

  const handleAboutClose = () => {
    if (focusedWindow === "About") toggleAboutOpen();
  };

  const handleAboutMinimized = () => {
    if (focusedWindow === "About") {
      setAboutMinimized(true);
      toggleAboutOpen();
    }
  };

  const handleSkillsClose = () => {
    if (focusedWindow === "Skills") toggleSkillsOpen();
  };

  const handleSkillsMinimized = () => {
    if (focusedWindow === "Skills") {
      setSkillsMinimized(true);
      toggleSkillsOpen();
    }
  };

  const handleProjectsClose = () => {
    if (focusedWindow === "Projects") toggleProjectsOpen();
  };

  const handleProjectsMinimized = () => {
    if (focusedWindow === "Projects") {
      setProjectsMinimized(true);
      toggleProjectsOpen();
    }
  };

  const handleFocus = (_e: any, node: { node: HTMLElement }) => {
    const ref = windowRef.current;

    if (ref.prevNode) {
      ref.prevNode.style.zIndex = ref.prevZIndex;
    }

    ref.prevNode = node.node;
    ref.prevZIndex = ref.prevNode.style.zIndex;
    ref.prevNode.style.zIndex = ref.newZIndex;
    setFocusedWindow(node.node.id);
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
          id="About"
          dragHandleClassName="topbar"
          minWidth={500}
          minHeight={300}
          onDragStart={handleFocus}
        >
          <TerminalTopbar className="topbar">
            <TerminalBtnContainer>
              <TerminalBtn
                color="close"
                title={focusedWindow === "About" ? "Close" : undefined}
                onClick={handleAboutClose}
                disabled={focusedWindow !== "About"}
              />
              <TerminalBtn
                color="minimize"
                title={focusedWindow === "About" ? "Minimize" : undefined}
                onClick={handleAboutMinimized}
                disabled={focusedWindow !== "About"}
              />
              <TerminalBtn
                color="expand"
                title={focusedWindow === "About" ? "Expand" : undefined}
                onClick={toggleAboutOpen}
                disabled={focusedWindow !== "About"}
              />
            </TerminalBtnContainer>
            <TopbarTitle>
              <TopbarTitleImage
                src="https://img.icons8.com/color/48/000000/mac-logo.png"
                alt="About"
              />
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
          id="Skills"
          dragHandleClassName="topbar"
          minWidth={500}
          minHeight={300}
          onDragStart={handleFocus}
        >
          <TerminalTopbar className="topbar">
            <TerminalBtnContainer>
              <TerminalBtn
                color="close"
                title={focusedWindow === "Skills" ? "Close" : undefined}
                onClick={handleSkillsClose}
                disabled={focusedWindow !== "Skills"}
              />
              <TerminalBtn
                color="minimize"
                title={focusedWindow === "Skills" ? "Minimize" : undefined}
                onClick={handleSkillsMinimized}
                disabled={focusedWindow !== "Skills"}
              />
              <TerminalBtn
                color="expand"
                title={focusedWindow === "Skills" ? "Expand" : undefined}
                onClick={toggleSkillsOpen}
                disabled={focusedWindow !== "Skills"}
              />
            </TerminalBtnContainer>
            <TopbarTitle>
              <TopbarTitleImage
                src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png"
                alt="Skills"
              />
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
          id="Projects"
          dragHandleClassName="topbar"
          minWidth={500}
          minHeight={300}
          onDragStart={handleFocus}
        >
          <TerminalTopbar className="topbar">
            <TerminalBtnContainer>
              <TerminalBtn
                color="close"
                title={focusedWindow === "Projects" ? "Close" : undefined}
                onClick={handleProjectsClose}
                disabled={focusedWindow !== "Projects"}
              />
              <TerminalBtn
                color="minimize"
                title={focusedWindow === "Projects" ? "Minimize" : undefined}
                onClick={handleProjectsMinimized}
                disabled={focusedWindow !== "Projects"}
              />
              <TerminalBtn
                color="expand"
                title={focusedWindow === "Projects" ? "Expand" : undefined}
                onClick={toggleProjectsOpen}
                disabled={focusedWindow !== "Projects"}
              />
            </TerminalBtnContainer>
            <TopbarTitle>
              <TopbarTitleImage
                src="https://img.icons8.com/color/48/000000/mac-folder.png"
                alt="Projects"
              />
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
