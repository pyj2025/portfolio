import React from "react";
import styled from "styled-components";
import { Rnd } from "react-rnd";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  background-color: #3c3c3c;
  color: white;
`;

const MenuItemWindow = styled(Rnd)`
  display: grid;
  align-items: center;
  justify-content: center;
  border: solid 1px #ddd;
  background-color: #1e232a;
  color: white;
`;

const MenuItemTopbar = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  background-color: #333436;
`;

const TopbarContainer = styled.div`
  margin-right: auto;
`;

const TopbarTitle = styled.div`
  text-align: center;
`;

export type BodyContentProps = {
  isAboutOpen: boolean;
  isSkillsOpen: boolean;
  isProjectsOpen: boolean;
  toggleAboutOpen: () => void;
  toggleSkillsOpen: () => void;
  toggleProjectsOpen: () => void;
};

const BodyContent: React.FC<BodyContentProps> = ({
  isAboutOpen,
  isSkillsOpen,
  isProjectsOpen,
  toggleAboutOpen,
  toggleSkillsOpen,
  toggleProjectsOpen,
}) => {
  return (
    <Container>
      {isAboutOpen ? (
        <MenuItemWindow
          default={{
            x: -100,
            y: -100,
            width: 800,
            height: 500,
          }}
        >
          <MenuItemTopbar>
            <TopbarContainer>
              <button onClick={toggleAboutOpen}>Close</button>
              <button onClick={toggleAboutOpen}>Close</button>
              <button onClick={toggleAboutOpen}>Close</button>
            </TopbarContainer>
            <TopbarTitle>
              <FontAwesomeIcon icon={faUser} />
              About
            </TopbarTitle>
          </MenuItemTopbar>
          <div>Body</div>
        </MenuItemWindow>
      ) : null}
      {isSkillsOpen ? (
        <MenuItemWindow
          default={{
            x: 0,
            y: 0,
            width: 200,
            height: 200,
          }}
        >
          Skills
          <button onClick={toggleSkillsOpen}>Close</button>
        </MenuItemWindow>
      ) : null}
      {isProjectsOpen ? (
        <MenuItemWindow
          default={{
            x: 0,
            y: 0,
            width: 200,
            height: 200,
          }}
        >
          Projects
          <button onClick={toggleProjectsOpen}>Close</button>
        </MenuItemWindow>
      ) : null}
    </Container>
  );
};

export default BodyContent;
