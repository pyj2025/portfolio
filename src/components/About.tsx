import React from "react";
import styled from "styled-components";
import { BoldText } from "../GlobalStyle";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px;
`;

const DataRow = styled.div`
  display: grid;
  grid-template-columns: 120px auto;
  margin-bottom: 4px;
`;

const About: React.FC = () => {
  return (
    <Container>
      <DataRow>
        <BoldText>Name</BoldText>
        <div>Youngjoon Park</div>
      </DataRow>
      <DataRow>
        <BoldText>Date of Birth</BoldText>
        <div>Jan.17.1994</div>
      </DataRow>
      <DataRow>
        <BoldText>Phone</BoldText>
        <div>+1 312-937-4435</div>
      </DataRow>
      <DataRow>
        <BoldText>Address</BoldText>
        <div>
          <div>25 W Randolph St Apt 903,</div>
          <div>Chicago, IL, 60601</div>
        </div>
      </DataRow>
    </Container>
  );
};

export default About;
