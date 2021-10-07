import React from "react";
import styled from "styled-components";
import { Rnd } from "react-rnd";

const Container = styled.div`
  background-color: #3c3c3c;
  color: white;
`;

const MenuItemWindow = styled(Rnd)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px #ddd;
  background-color: white;
  color: red;
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
          <div>
          <div>
          <button onClick={toggleAboutOpen}>Close</button>
          About
          </div>
          <div>
            Body
          </div>
          </div>
          
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
