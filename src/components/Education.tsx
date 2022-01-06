import React from "react";
import styled from "styled-components";
import { BoldText } from "../GlobalStyle";
import PurdueLogo from "../image/PurdueLogo.png";

const EducationContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  justify-content: center;
  margin: 10px;
`;

const LogoContainer = styled.div`
  display: grid;
  justify-content: center;
  margin: 10px;
`;

const PurdueLogoImage = styled.img`
  background-color: white;
  width: 95%;
  height: 95%;
`;

const DataRowContainer = styled.div`
  display: grid;
  grid-template-columns: 130px auto;
`;

const Education: React.FC = () => {
  return (
    <>
      <LogoContainer>
        <PurdueLogoImage src={PurdueLogo} alt="PurdueLogo" />
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
    </>
  );
};

export default Education;
