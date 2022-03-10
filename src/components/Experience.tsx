import React from "react";
import styled from "styled-components";
import { BoldText, MutedText } from "../GlobalStyle";

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
          <MutedText>Name</MutedText>
          <div>Enfusion</div>
        </RowContainer>
        <RowContainer>
          <MutedText>Location</MutedText>
          <div>Chicago, IL, USA</div>
        </RowContainer>
        <RowContainer>
          <MutedText>Date</MutedText>
          <div>Jan 2020 - Present</div>
        </RowContainer>
      </DataRow>
      <DataRow>
        <BoldText>Undergraduate Teaching Assistant</BoldText>
        <RowContainer>
          <MutedText>Name</MutedText>
          <div>Purdue University</div>
        </RowContainer>
        <RowContainer>
          <MutedText>Location</MutedText>
          <div>West Lafayette, IN, USA</div>
        </RowContainer>
        <RowContainer>
          <MutedText>Date</MutedText>
          <div>Aug 2018 - Dec 2019</div>
        </RowContainer>
      </DataRow>
      <DataRow>
        <BoldText>Technical Consultant Intern</BoldText>
        <RowContainer>
          <MutedText>Name</MutedText>
          <div>Dotis</div>
        </RowContainer>
        <RowContainer>
          <MutedText>Location</MutedText>
          <div>Seoul, South Korea</div>
        </RowContainer>
        <RowContainer>
          <MutedText>Date</MutedText>
          <div>Jun 2017 - Jul 2017</div>
        </RowContainer>
      </DataRow>
      <DataRow>
        <BoldText>Software Engineering Intern</BoldText>
        <RowContainer>
          <MutedText>Name</MutedText>
          <div>Hyop Woon International Co .,Ltd</div>
        </RowContainer>
        <RowContainer>
          <MutedText>Location</MutedText>
          <div>Seoul, South Korea</div>
        </RowContainer>
        <RowContainer>
          <MutedText>Date</MutedText>
          <div>Jul 2015 - Aug 2015</div>
        </RowContainer>
      </DataRow>
    </Container>
  );
};

export default Experience;
