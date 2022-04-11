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
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
`;

const BackEnd: React.FC = () => {
  return (
    <ContentContainer>
      <SkillsIconContainer>
        <IconImageContainer>
          <img
            src="https://img.icons8.com/color/48/000000/nodejs.png"
            style={{ width: 40, height: 40 }}
            alt="Node.js"
          />
        </IconImageContainer>

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
        <IconImageContainer>
          <img
            src="https://img.icons8.com/color/48/000000/amazon-web-services.png"
            style={{ width: 40, height: 40 }}
            alt="aws"
          />
        </IconImageContainer>

        <IconLabel>aws</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <IconImageContainer>
          <img
            src="https://img.icons8.com/color/48/000000/spring-logo.png"
            style={{ width: 40, height: 40 }}
            alt="Spring"
          />
        </IconImageContainer>

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
        <IconImageContainer>
          <img
            src="https://api.iconify.design/logos/laravel.svg"
            style={{ width: 40, height: 40 }}
            alt="Laravel"
          />
        </IconImageContainer>
        <IconLabel>Laravel</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <IconImageContainer>
          <img
            src="https://img.icons8.com/color/48/000000/mongodb.png"
            style={{ width: 40, height: 40 }}
            alt="MongoDB"
          />
        </IconImageContainer>
        <IconLabel>MongoDB</IconLabel>
      </SkillsIconContainer>
    </ContentContainer>
  );
};

export default BackEnd;
