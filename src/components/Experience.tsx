import React from "react";
import styled from "styled-components";
import { BoldText } from "../GlobalStyle";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 10px;
`;

const DataRow = styled.div`
  display: grid;
  margin-bottom: 4px;
`;

const Experience: React.FC = () => {
  return (
    <Container>
      <DataRow>
        <BoldText>Junior Frontend Developer</BoldText>
        <div>Enfusion, Chicago, IL, USA</div>
        <div>Jan 2020 - Present</div>
      </DataRow>
      <DataRow>
        <BoldText>Undergraduate Teaching Assistant</BoldText>
        <div>Purdue University, West Lafayette, IN, USA</div>
        <div>Aug 2018 - Dec 2019</div>
      </DataRow>
      <DataRow>
        <BoldText>Technical Consultant Intern</BoldText>
        <div>Dotis, Seoul, South Korea</div>
        <div>Jun 2017 - Jul 2017</div>
      </DataRow>
      <DataRow>
        <BoldText>Software Engineering Intern</BoldText>
        <div>Hyop Woon, Seoul, South Korea</div>
        <div>Jul 2015 - Aug 2015</div>
      </DataRow>
    </Container>
  );
};

export default Experience;
