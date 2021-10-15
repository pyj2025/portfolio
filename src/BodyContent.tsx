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
  border: 1px solid #acacac;
  box-shadow: 0px 0px 20px #acacac;
  border-radius: 6px;
  background-color: white;
  color: black;
`;

const MenuItemTopbar = styled.div`
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0, #ebebeb, color-stop(1, #d5d5d5))
  );
  background: -webkit-linear-gradient(top, #ebebeb, #d5d5d5);
  background: -moz-linear-gradient(top, #ebebeb, #d5d5d5);
  background: -ms-linear-gradient(top, #ebebeb, #d5d5d5);
  background: -o-linear-gradient(top, #ebebeb, #d5d5d5);
  background: linear-gradient(top, #ebebeb, #d5d5d5);
  color: #4d494d;
  font-size: 11pt;
  line-height: 20px;
  text-align: center;
  width: 100%;
  height: 20px;
  border-top: 1px solid #f3f1f3;
  border-bottom: 1px solid #b1aeb1;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  cursor: default;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  align-items: center;
`;

const TopbarContainer = styled.div`
  padding-left: 8px;
  padding-top: 3px;
  float: left;
  line-height: 0px;
  margin-right: auto;

  :hover a {
    visibility: visible;
  }
`;

const TopbarBtn = styled.div`
  background: #ff5c5c;
  font-size: 9pt;
  width: 11px;
  height: 11px;
  border: 1px solid #e33e41;
  border-radius: 50%;
  display: inline-block;

  :active {
    background: #c14645;
    border: 1px solid #b03537;
  }
`;

const CloseBtn = styled.a`
  color: #820005;
  visibility: hidden;
  cursor: default;
  line-height: 9px;
  vertical-align: 50%;
`;

const Minimize = styled.div`
  background: #ffbd4c;
  font-size: 9pt;
  line-height: 11px;
  margin-left: 4px;
  width: 11px;
  height: 11px;
  border: 1px solid #e09e3e;
  border-radius: 50%;
  display: inline-block;

  :active {
    background: #c08e38;
    border: 1px solid #af7c33;
  }
`;

const Minimizebutton = styled.a`
  color: #9a5518;
  visibility: hidden;
  cursor: default;
  line-height: 9px;
  vertical-align: 50%;
`;

const Expand = styled.a`
  background: #00ca56;
  font-size: 9pt;
  line-height: 11px;
  margin-left: 6px;
  width: 11px;
  height: 11px;
  border: 1px solid #14ae46;
  border-radius: 50%;
  display: inline-block;

  :active {
    background: #029740;
    border: 1px solid #128435;
  }
`;

const Expandbutton = styled.a`
  color: #006519;
  visibility: hidden;
  cursor: default;
  line-height: 9px;
  vertical-align: 50%;
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
              <TopbarBtn>
                <CloseBtn title="Close" onClick={toggleAboutOpen}>
                  <FontAwesomeIcon icon={faTimes} />
                </CloseBtn>
              </TopbarBtn>
              <Minimize>
                <Minimizebutton title="Minimize" onClick={handleAboutMinimized}>
                  <FontAwesomeIcon icon={faMinus} />
                </Minimizebutton>
              </Minimize>
              <Expand>
                <Expandbutton title="Expand" onClick={toggleAboutOpen}>
                  <FontAwesomeIcon icon={faExpandAlt} />
                </Expandbutton>
              </Expand>
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
