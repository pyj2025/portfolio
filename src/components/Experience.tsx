import React from "react";
import styled from "styled-components";
import { BoldText } from "../GlobalStyle";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4px;
  margin: 10px;
`;

const DataRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4px;
  padding: 4px;
  width: 100%;
  max-width: 350px;
  height: 100%;
  border: 1px solid red;
  border-radius: 8px;
`;

const RowContainer = styled.div`
  display: grid;
  grid-template-columns: 80px auto;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 4px;
`;

const Experience: React.FC = () => {
  return (
    <Container>
      <DataRow>
        <BoldText>Junior Frontend Developer</BoldText>
        <RowContainer>
          <div>Name:</div>
          <div>Enfusion</div>
        </RowContainer>
        <RowContainer>
          <div>Location:</div>
          <div>Chicago, IL, USA</div>
        </RowContainer>
        <RowContainer>
          <div>Date:</div>
          <div>Jan 2020 - Present</div>
        </RowContainer>
      </DataRow>
      <DataRow>
        <BoldText>Undergraduate Teaching Assistant</BoldText>
        <RowContainer>
          <div>Name:</div>
          <div>Purdue University</div>
        </RowContainer>
        <RowContainer>
          <div>Location:</div>
          <div>West Lafayette, IN, USA</div>
        </RowContainer>
        <RowContainer>
          <div>Date:</div>
          <div>Aug 2018 - Dec 2019</div>
        </RowContainer>
      </DataRow>
      <DataRow>
        <BoldText>Technical Consultant Intern</BoldText>
        <RowContainer>
          <div>Name:</div>
          <div>Dotis</div>
        </RowContainer>
        <RowContainer>
          <div>Location:</div>
          <div>Seoul, South Korea</div>
        </RowContainer>
        <RowContainer>
          <div>Date:</div>
          <div>Jun 2017 - Jul 2017</div>
        </RowContainer>
      </DataRow>
      <DataRow>
        <BoldText>Software Engineering Intern</BoldText>
        <RowContainer>
          <div>Name:</div>
          <div>Hyop Woon International Co .,Ltd</div>
        </RowContainer>
        <RowContainer>
          <div>Location:</div>
          <div>Seoul, South Korea</div>
        </RowContainer>
        <RowContainer>
          <div>Date:</div>
          <div>Jul 2015 - Aug 2015</div>
        </RowContainer>
      </DataRow>
    </Container>
  );
};

export default Experience;
