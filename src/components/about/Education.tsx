import React from "react";
import styled from "styled-components";
import { BoldText, MutedText } from "../../GlobalStyle";
import PurdueLogo from "../../image/PurdueLogo.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  min-width: 20rem;
  margin: 10px;
`;

const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const PurdueLogoImage = styled.img`
  background-color: white;
  width: 200px;
  height: 200px;
`;

const DataRowContainer = styled.div`
  display: grid;
  grid-template-columns: 120px auto;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  margin-bottom: 4px;
`;

const Education: React.FC = () => {
  return (
    <Container>
      <LogoContainer>
        <PurdueLogoImage src={PurdueLogo} alt="Purdue" />
      </LogoContainer>
      <EducationContainer>
        <DataRowContainer>
          <MutedText>Name</MutedText>
          <BoldText>Purdue University</BoldText>
        </DataRowContainer>
        <DataRowContainer>
          <MutedText>Graduated</MutedText>
          <div>Dec. 2019</div>
        </DataRowContainer>
        <DataRowContainer>
          <MutedText>Details</MutedText>
          <div>Bachelor of Science in Computer Science</div>
        </DataRowContainer>
        <DataRowContainer>
          <MutedText>Concentration</MutedText>
          <div>Software Engineering</div>
        </DataRowContainer>
      </EducationContainer>
    </Container>
  );
};

export default Education;
