import React from "react";
import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px;
`;

const SkillsIconContainer = styled.div<{ noWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ noWidth }) => (noWidth ? undefined : "60px")};
  justify-content: center;
  align-items: center;
`;

const IconLabel = styled.div`
  font-size: 0.75rem;
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
          src="https://img.icons8.com/color/48/000000/angularjs.png"
          alt="Angular"
        />
        <IconLabel>Angular</IconLabel>
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
          src="https://img.icons8.com/color/48/000000/redux.png"
          alt="Redux"
        />
        <IconLabel>Redux</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/ios-filled/50/000000/jquery.png"
          alt="jQuery"
        />
        <IconLabel>jQuery</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img src="https://img.icons8.com/color/50/000000/sass.png" alt="SASS" />
        <IconLabel>SASS</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/color/48/000000/bootstrap.png"
          alt="Bootstrap"
        />
        <IconLabel>Bootstrap</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/color/48/000000/code-file.png"
          alt="Styled-components"
        />
        <IconLabel>Styled-components</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/color/48/000000/code-file.png"
          alt="Tailwind"
        />
        <IconLabel>Tailwind</IconLabel>
      </SkillsIconContainer>
    </ContentContainer>
  );
};

export default FrontEnd;
