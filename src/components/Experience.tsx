import React from "react";
import styled from "styled-components";
import { BoldText } from "../GlobalStyle";

const ExperienceContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 5px;
  margin: 10px;
`;

const Experience: React.FC = () => {
  return (
    <ExperienceContainer>
      <div>
        <BoldText>Junior Frontend Developer</BoldText>
        <div>Enfusion, Chicago, IL, USA</div>
        <div>Jan 2020 - Present</div>
      </div>
      <div>
        <BoldText>Undergraduate Teaching Assistant</BoldText>
        <div>Purdue University, West Lafayette, IN, USA</div>
        <div>Aug 2018 - Dec 2019</div>
      </div>
      <div>
        <BoldText>Technical Consultant Intern</BoldText>
        <div>Dotis, Seoul, South Korea</div>
        <div>Jun 2017 - Jul 2017</div>
      </div>
      <div>
        <BoldText>Software Engineering Intern</BoldText>
        <div>Hyop Woon, Seoul, South Korea</div>
        <div>Jul 2015 - Aug 2015</div>
      </div>
    </ExperienceContainer>
  );
};

export default Experience;
