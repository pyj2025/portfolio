import React from "react";
import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const SkillsIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 4rem;
  height: 4rem;
  justify-content: center;
  align-items: center;
  margin: 0.25rem;
`;

const IconLabel = styled.div`
  font-size: 0.75rem;
  text-align: center;
  height: 1em;
  margin-top: 0.25rem;
`;

const IconImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 3rem;
  height: 3rem;
  background-color: white;
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
`;

const FrontEnd: React.FC = () => {
  return (
    <ContentContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/color/48/000000/react-native.png"
          alt="React"
        />
        <IconLabel>React</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/color/48/000000/vue-js.png"
          alt="Vue"
        />
        <IconLabel>Vue</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/color/48/000000/angularjs.png"
          alt="Angular"
        />
        <IconLabel>Angular</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <IconImageContainer>
          <img
            src="https://api.iconify.design/logos/nextjs.svg"
            style={{ width: 40, height: 40 }}
            alt="nextjs"
          />
        </IconImageContainer>

        <IconLabel>Nextjs</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/color/48/000000/redux.png"
          alt="Redux"
        />
        <IconLabel>Redux</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <IconImageContainer>
          <img
            src="https://img.icons8.com/ios-filled/48/000000/jquery.png"
            style={{ width: 40, height: 40 }}
            alt="jQuery"
          />
        </IconImageContainer>

        <IconLabel>jQuery</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/color/48/000000/bootstrap.png"
          alt="Bootstrap"
        />
        <IconLabel>Bootstrap</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img src="https://img.icons8.com/color/48/000000/sass.png" alt="SASS" />
        <IconLabel>SASS</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://api.iconify.design/vscode-icons/file-type-tailwind.svg"
          style={{ width: 48, height: 48 }}
          alt="tailwind"
        />
        <IconLabel>Tailwind</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/external-flat-juicy-fish/48/000000/external-css-coding-and-development-flat-flat-juicy-fish-2.png"
          alt="css-file"
        />
        <IconLabel>styled-components</IconLabel>
      </SkillsIconContainer>
    </ContentContainer>
  );
};

export default FrontEnd;
