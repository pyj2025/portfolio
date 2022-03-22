import React from "react";
import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px;
`;

const SkillsIconContainer = styled.div<{ noWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ noWidth }) => (noWidth ? undefined : "60px")};
  justify-content: center;
  align-items: center;
`;

const IconLabel = styled.div`
  font-size: 0.75rem;
`;

const ProgrammingLanguage: React.FC = () => {
  return (
    <ContentContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/color/48/000000/typescript.png"
          alt="TypeScript"
        />
        <IconLabel>TypeScript</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/color/48/000000/javascript.png"
          alt="JavaScript"
        />
        <IconLabel>JavaScript</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/color/48/000000/python.png"
          alt="Python"
        />
        <IconLabel>Python</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img src="https://img.icons8.com/color/48/000000/java.png" alt="Java" />
        <IconLabel>Java</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/color/48/000000/html-5--v1.png"
          alt="HTML5"
        />
        <IconLabel>HTML5</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img src="https://img.icons8.com/color/48/000000/css3.png" alt="css" />
        <IconLabel>CSS3</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/color/48/000000/c-sharp-logo.png"
          alt="C#"
        />
        <IconLabel>C#</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
          alt="C++"
        />
        <IconLabel>C/C++</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/fluency/48/000000/mysql-logo.png"
          alt="MySQL"
        />
        <IconLabel>MySQL</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/officel/48/000000/php-logo.png"
          alt="PHP"
        />
        <IconLabel>PHP</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/color/48/000000/code-file.png"
          alt="PL/SQL"
        />
        <IconLabel>PL/SQL</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/external-becris-flat-becris/48/000000/external-r-data-science-becris-flat-becris.png"
          alt="R"
        />
        <IconLabel>R</IconLabel>
      </SkillsIconContainer>
    </ContentContainer>
  );
};

export default ProgrammingLanguage;
