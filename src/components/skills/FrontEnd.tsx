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

const IconLabel = styled.div<{ noWidth?: boolean }>`
  font-size: 0.75rem;

  display: flex;
  flex-wrap: wrap;
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
          src="https://img.icons8.com/ios-filled/48/000000/jquery.png"
          alt="jQuery"
        />
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
          src="https://img.icons8.com/external-flat-juicy-fish/48/000000/external-css-coding-and-development-flat-flat-juicy-fish-2.png"
          alt="css-file"
        />
        <IconLabel>Tailwind</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer noWidth>
        <img
          src="https://img.icons8.com/external-flat-juicy-fish/48/000000/external-css-coding-and-development-flat-flat-juicy-fish-2.png"
          alt="css-file"
        />
        <IconLabel>Styled-components</IconLabel>
      </SkillsIconContainer>
    </ContentContainer>
  );
};

export default FrontEnd;
