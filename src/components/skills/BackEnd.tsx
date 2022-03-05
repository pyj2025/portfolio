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

const BackEnd: React.FC = () => {
  return (
    <ContentContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/color/48/000000/nodejs.png"
          alt="Node.js"
        />
        <IconLabel>Node.js</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/color/48/000000/code-file.png"
          alt="Express"
        />
        <IconLabel>Express</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/color/48/000000/spring-logo.png"
          alt="Spring"
        />
        <IconLabel>Spring</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/color/48/000000/code-file.png"
          alt="ASP.Net Core"
        />
        <IconLabel>ASP.Net Core</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/ios-filled/50/000000/laravel.png"
          alt="Laravel"
        />
        <IconLabel>Laravel</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/color/48/000000/mongodb.png"
          alt="MongoDB"
        />
        <IconLabel>MongoDB</IconLabel>
      </SkillsIconContainer>
    </ContentContainer>
  );
};

export default BackEnd;
