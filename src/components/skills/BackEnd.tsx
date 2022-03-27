import React from "react";
import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 10px;
`;

const SkillsIconContainer = styled.div<{ noWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 4rem;
  height: 4rem;
  justify-content: center;
  align-items: center;
`;

const IconLabel = styled.div`
  font-size: 0.75rem;
  text-align: center;
  height: 1em;
`;

const IconImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 48px;
  height: 48px;
  background-color: white;
  justify-content: center;
  align-items: center;
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
        <IconImageContainer>
          <img
            src="https://api.iconify.design/logos/express.svg"
            style={{ width: 40, height: 40 }}
            alt="Express"
          />
        </IconImageContainer>

        <IconLabel>Express</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/color/48/000000/amazon-web-services.png"
          alt="aws"
        />
        <IconLabel>aws</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/color/48/000000/spring-logo.png"
          alt="Spring"
        />
        <IconLabel>Spring</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer noWidth>
        <IconImageContainer>
          <img
            src="https://api.iconify.design/cib/dot-net.svg"
            style={{ width: 40, height: 40 }}
            alt=".Net"
          />
        </IconImageContainer>
        <IconLabel>ASP.Net Core</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://api.iconify.design/logos/laravel.svg"
          style={{ width: 48, height: 48 }}
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
