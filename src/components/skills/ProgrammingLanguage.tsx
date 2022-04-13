import React from "react";
import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const SkillsIconContainer = styled.div<{ noWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ noWidth }) => (noWidth ? undefined : "60px")};
  justify-content: center;
  align-items: center;
  margin: 0.25rem;
`;

const IconLabel = styled.div`
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;

const IconImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 48px;
  height: 48px;
  background-color: white;
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
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
        <IconImageContainer>
          <img
            src="https://img.icons8.com/color/48/000000/java.png"
            style={{ width: 40, height: 40 }}
            alt="Java"
          />
        </IconImageContainer>
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
        <IconImageContainer>
          <img
            src="https://img.icons8.com/fluency/48/000000/mysql-logo.png"
            style={{ width: 40, height: 40 }}
            alt="MySQL"
          />
        </IconImageContainer>

        <IconLabel>MySQL</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <IconImageContainer>
          <img
            src="https://img.icons8.com/officel/48/000000/php-logo.png"
            style={{ width: 40, height: 40 }}
            alt="PHP"
          />
        </IconImageContainer>

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
