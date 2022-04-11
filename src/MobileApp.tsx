import React from "react";
import { isMobile, isTablet } from "react-device-detect";
import styled from "styled-components";
import useScreenSize, {
  MOBILE_MAX_WIDTH,
  TABLET_MAX_WIDTH,
} from "./utils/useScreenSize";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

const MenuWrapper = styled.div<{ numOfCols: number }>`
  display: grid;
  grid-template-columns: ${({ numOfCols }) => `repeat(${numOfCols}, 1fr)`};
  grid-gap: 8px;
  width: 100%;
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
`;

const IconImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
`;

const MobileApp: React.FC = () => {
  const { width } = useScreenSize();
  const [numOfCols, setNumOfCols] = React.useState(5);

  React.useEffect(() => {
    if (isMobile || width <= MOBILE_MAX_WIDTH) {
      setNumOfCols(4);
    } else if (
      isTablet ||
      (width > MOBILE_MAX_WIDTH && width <= TABLET_MAX_WIDTH)
    ) {
      setNumOfCols(5);
    } else {
      setNumOfCols(5);
    }
  }, [width]);

  const handleEmailClick = () => {
    window.open("mailto:pyj2025@gmail.com");
  };

  return (
    <Container>
      <MenuWrapper numOfCols={numOfCols}>
        <MenuItem title="Resume" href="https://github.com/pyj2025">
          <IconImageContainer>
            <img
              src="https://img.icons8.com/color/48/000000/google-docs.png"
              alt="google-docs"
            />
          </IconImageContainer>
          <div>Resume</div>
        </MenuItem>
        <MenuItem title="Github" href="https://github.com/pyj2025">
          <IconImageContainer>
            <img
              src="https://img.icons8.com/material-outlined/48/000000/github.png"
              alt="Github"
            />
          </IconImageContainer>
          <div>Github</div>
        </MenuItem>
        <MenuItem title="Linkedin" href="https://www.linkedin.com/in/devjoon/">
          <IconImageContainer>
            <img
              src="https://img.icons8.com/fluency/48/000000/linkedin.png"
              alt="Linkedin"
            />
          </IconImageContainer>

          <div>Linkedin</div>
        </MenuItem>
        <MenuItem
          title="Facebook"
          href="https://www.facebook.com/youngjoon.park.71"
        >
          <IconImageContainer>
            <img
              src="https://img.icons8.com/color/48/000000/facebook-new.png"
              alt="Facebook"
            />
          </IconImageContainer>

          <div>Facebook</div>
        </MenuItem>
        <MenuItem title="Email" onClick={handleEmailClick}>
          <IconImageContainer>
            <img
              src="https://img.icons8.com/color/48/000000/gmail-new.png"
              alt="Email"
            />
          </IconImageContainer>
          <div>Email</div>
        </MenuItem>
      </MenuWrapper>
    </Container>
  );
};

export default MobileApp;
