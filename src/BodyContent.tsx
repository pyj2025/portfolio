import React, { useState } from "react";
import styled from "styled-components";
import { Rnd } from "react-rnd";
import {
  faCode,
  faExpandAlt,
  faFolder,
  faMinus,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  background-color: #3c3c3c;
  color: white;
`;

const MenuItemWindow = styled(Rnd)`
  display: grid;
  align-items: center;
  justify-content: center;
  border: solid 1px #3c3c3c;
  box-shadow: 1px 1px #333333;
  background-color: white;
  color: black;
`;

const MenuItemTopbar = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 35px;
  margin: 0 auto;
  background-color: #333436;
  align-items: center;
  color: white;
`;

const TopbarContainer = styled.div`
  margin-right: auto;
`;

const CloseBtn = styled.button`
  padding: 0;
  border: none;
  background: none;
  color: white;
  margin-left: 10px;
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
        <MenuItemWindow
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
          <MenuItemTopbar className="topbar">
            <TopbarContainer>
              <CloseBtn title="Close" onClick={toggleAboutOpen}>
                <FontAwesomeIcon icon={faTimes} />
              </CloseBtn>
              <CloseBtn title="Minimize" onClick={handleAboutMinimized}>
                <FontAwesomeIcon icon={faMinus} />
              </CloseBtn>
              <CloseBtn title="Expand" onClick={toggleAboutOpen}>
                <FontAwesomeIcon icon={faExpandAlt} />
              </CloseBtn>
            </TopbarContainer>
            <TopbarTitle>
              <FontAwesomeIcon icon={faUser} />
              <TopbarTitleText>About</TopbarTitleText>
            </TopbarTitle>
          </MenuItemTopbar>
          <div>Body</div>
        </MenuItemWindow>
      ) : null}
      {isSkillsOpen ? (
        <MenuItemWindow
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
          <MenuItemTopbar className="topbar">
            <TopbarContainer>
              <CloseBtn title="Close" onClick={toggleSkillsOpen}>
                <FontAwesomeIcon icon={faTimes} />
              </CloseBtn>
              <CloseBtn title="Minimize" onClick={handleSkillsMinimized}>
                <FontAwesomeIcon icon={faMinus} />
              </CloseBtn>
              <CloseBtn title="Expand" onClick={toggleSkillsOpen}>
                <FontAwesomeIcon icon={faExpandAlt} />
              </CloseBtn>
            </TopbarContainer>
            <TopbarTitle>
              <FontAwesomeIcon icon={faCode} />
              <TopbarTitleText>Skills</TopbarTitleText>
            </TopbarTitle>
          </MenuItemTopbar>
          <div>Body</div>
        </MenuItemWindow>
      ) : null}
      {isProjectsOpen ? (
        <MenuItemWindow
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
          <MenuItemTopbar className="topbar">
            <TopbarContainer>
              <CloseBtn title="Close" onClick={toggleProjectsOpen}>
                <FontAwesomeIcon icon={faTimes} />
              </CloseBtn>
              <CloseBtn title="Minimize" onClick={handleProjectsMinimized}>
                <FontAwesomeIcon icon={faMinus} />
              </CloseBtn>
              <CloseBtn title="Expand" onClick={toggleProjectsOpen}>
                <FontAwesomeIcon icon={faExpandAlt} />
              </CloseBtn>
            </TopbarContainer>
            <TopbarTitle>
              <FontAwesomeIcon icon={faFolder} />
              <TopbarTitleText>Projects</TopbarTitleText>
            </TopbarTitle>
          </MenuItemTopbar>
          <div>Body</div>
        </MenuItemWindow>
      ) : null}
    </Container>
  );
};

export default BodyContent;
