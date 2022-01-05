import React from "react";
import styled from "styled-components";
import { BoldText } from "../GlobalStyle";

const AboutContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 5px;
  margin: 10px;
`;

const DataRowContainer = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  grid-gap: 5px;
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <DataRowContainer>
        <BoldText>Name</BoldText>
        <div>Youngjoon Park</div>
      </DataRowContainer>
      <DataRowContainer>
        <BoldText>Date of Birth</BoldText>
        <div>Jan.17.1994</div>
      </DataRowContainer>
      <DataRowContainer>
        <BoldText>Phone</BoldText>
        <div>+1 312-937-4435</div>
      </DataRowContainer>
      <DataRowContainer>
        <BoldText>Address</BoldText>
        <div>25 W Randolph St Apt 903, Chicago, IL, 60601</div>
      </DataRowContainer>
    </AboutContainer>
  );
};

export default About;
