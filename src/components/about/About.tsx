import React from "react";
import styled from "styled-components";
import { MutedText } from "../../GlobalStyle";

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
        <MutedText>Name</MutedText>
        <div>Youngjoon Park</div>
      </DataRow>
      <DataRow>
        <MutedText>Date of Birth</MutedText>
        <div>Jan.17.1994</div>
      </DataRow>
      <DataRow>
        <MutedText>Phone</MutedText>
        <div>(+1) 312-937-4435</div>
      </DataRow>
      <DataRow>
        <MutedText>Address</MutedText>
        <div>
          <div>25 W Randolph St Apt 903,</div>
          <div>Chicago, IL, 60601</div>
        </div>
      </DataRow>
    </Container>
  );
};

export default About;
