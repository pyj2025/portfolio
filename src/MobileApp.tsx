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
  padding: 0.5rem;
  text-decoration: none;
  cursor: pointer;

  border: 4px solid purple;
`;

const MobileApp: React.FC = () => {
  const handleEmailClick = () => {
    window.open("mailto:pyj2025@gmail.com");
  };

  return (
    <Container>
      <MenuWrapper>
        <MenuItem title="Resume" href="https://github.com/pyj2025">
          <img src="https://img.icons8.com/color/48/000000/pdf.png" alt="pdf" />
          <div>Resume</div>
        </MenuItem>
        <MenuItem title="Github" href="https://github.com/pyj2025">
          <img
            src="https://img.icons8.com/material-outlined/48/000000/github.png"
            alt="Github"
          />
          <div>Github</div>
        </MenuItem>
        <MenuItem title="Linkedin" href="https://www.linkedin.com/in/devjoon/">
          <img
            src="https://img.icons8.com/fluency/48/000000/linkedin.png"
            alt="Linkedin"
          />
          <div>Linkedin</div>
        </MenuItem>
        <MenuItem
          title="Facebook"
          href="https://www.facebook.com/youngjoon.park.71"
        >
          <img
            src="https://img.icons8.com/color/48/000000/facebook-new.png"
            alt="Facebook"
          />
          <div>Facebook</div>
        </MenuItem>
        <MenuItem title="Email" onClick={handleEmailClick}>
          <img
            src="https://img.icons8.com/color/48/000000/gmail-new.png"
            alt="Email"
          />
          <div>Email</div>
        </MenuItem>
      </MenuWrapper>
    </Container>
  );
};

export default MobileApp;
