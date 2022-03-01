import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border: 1px solid blue;
`;

const MenuItem = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  margin: 0 auto;
  box-sizing: border-box;
  transition: background-color 0.2s;
  border-radius: 0.2rem;
  padding: 1rem;
  text-decoration: none;
  cursor: pointer;

  border: 4px solid purple;

  :hover {
    background-color: rgba(255, 255, 192, 0.1);
  }
`;

const MobileMenu: React.FC = () => {
  const handleEmailClick = () => {
    window.open("mailto:pyj2025@gmail.com");
  };

  return (
    <Container>
      <MenuWrapper>
        <MenuItem title="Resume" href="https://github.com/pyj2025">
          <img src="https://img.icons8.com/color/48/000000/pdf.png" alt="pdf" />
          <span>
            Resume <FontAwesomeIcon icon={faExternalLinkAlt} />
          </span>
        </MenuItem>
        <MenuItem title="Github" href="https://github.com/pyj2025">
          <img
            src="https://img.icons8.com/material-outlined/48/000000/github.png"
            alt="Github"
          />
          <span>
            Github <FontAwesomeIcon icon={faExternalLinkAlt} />
          </span>
        </MenuItem>
        <MenuItem title="Linkedin" href="https://www.linkedin.com/in/devjoon/">
          <img
            src="https://img.icons8.com/fluency/48/000000/linkedin.png"
            alt="Linkedin"
          />
          <span>
            Linkedin <FontAwesomeIcon icon={faExternalLinkAlt} />
          </span>
        </MenuItem>
        <MenuItem
          title="Facebook"
          href="https://www.facebook.com/youngjoon.park.71"
        >
          <img
            src="https://img.icons8.com/color/48/000000/facebook-new.png"
            alt="Facebook"
          />
          <span>
            Facebook <FontAwesomeIcon icon={faExternalLinkAlt} />
          </span>
        </MenuItem>
        <MenuItem title="Email" onClick={handleEmailClick}>
          <img
            src="https://img.icons8.com/color/48/000000/gmail-new.png"
            alt="Email"
          />
          <span>
            Email <FontAwesomeIcon icon={faExternalLinkAlt} />
          </span>
        </MenuItem>
      </MenuWrapper>
    </Container>
  );
};

export default MobileMenu;
