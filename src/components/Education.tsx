import React from "react";
import styled from "styled-components";
import { BoldText } from "../GlobalStyle";
import PurdueLogo from "../image/PurdueLogo.png";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px;
`;

const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 10px;
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
  align-items: center;
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
          <BoldText>Name</BoldText>
          <div>Purdue University</div>
        </DataRowContainer>
        <DataRowContainer>
          <BoldText>Details</BoldText>
          <div>Bachelor of Science in Computer Science</div>
        </DataRowContainer>
        <DataRowContainer>
          <BoldText>Concentration</BoldText>
          <div>Software Engineering</div>
        </DataRowContainer>
        <DataRowContainer>
          <BoldText>Graduated</BoldText>
          <div>Dec. 2019</div>
        </DataRowContainer>
      </EducationContainer>
    </Container>
  );
};

export default Education;
