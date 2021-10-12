import { faCode, faFolder, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #2879bd;
`;

const DockIcon = styled.a`
  flex: 1;
  color: white;
`;

export type FooterBarProps = {
  isAboutMinimized: boolean;
  isSkillsMinimized: boolean;
  isProjectsMinimized: boolean;
  toggleAboutOpen: () => void;
  setAboutMinimized: (flag: boolean) => void;
  toggleSkillsOpen: () => void;
  setSkillsMinimized: (flag: boolean) => void;
  toggleProjectsOpen: () => void;
  setProjectsMinimized: (flag: boolean) => void;
};

const FooterBar: React.FC<FooterBarProps> = ({
  isAboutMinimized,
  isSkillsMinimized,
  isProjectsMinimized,
  toggleAboutOpen,
  setAboutMinimized,
  toggleSkillsOpen,
  setSkillsMinimized,
  toggleProjectsOpen,
  setProjectsMinimized,
}) => {
  const handleAboutMinimized = () => {
    setAboutMinimized(false);
    toggleAboutOpen();
  };

  const handleSkillsMinimized = () => {
    setSkillsMinimized(false);
    toggleSkillsOpen();
  };

  const handleProjectsMinimized = () => {
    setProjectsMinimized(false);
    toggleProjectsOpen();
  };

  return (
    <Container>
      {isAboutMinimized ? (
        <DockIcon onClick={handleAboutMinimized}>
          <FontAwesomeIcon icon={faUser} />
        </DockIcon>
      ) : null}
      {isSkillsMinimized ? (
        <DockIcon onClick={handleSkillsMinimized}>
          <FontAwesomeIcon icon={faCode} />
        </DockIcon>
      ) : null}
      {isProjectsMinimized ? (
        <DockIcon onClick={handleProjectsMinimized}>
          <FontAwesomeIcon icon={faFolder} />
        </DockIcon>
      ) : null}
    </Container>
  );
};

export default FooterBar;
