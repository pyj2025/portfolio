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

export const FrontEnd = () => {
  return (
    <ContentContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/color/48/000000/react-native.png"
          alt="React"
        />
        <IconLabel>React</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/color/48/000000/angularjs.png"
          alt="Angular"
        />
        <IconLabel>Angular</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/color/48/000000/vue-js.png"
          alt="Vue"
        />
        <IconLabel>Vue</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/color/48/000000/redux.png"
          alt="Redux"
        />
        <IconLabel>Redux</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/ios-filled/50/000000/jquery.png"
          alt="jQuery"
        />
        <IconLabel>jQuery</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img src="https://img.icons8.com/color/50/000000/sass.png" alt="SASS" />
        <IconLabel>SASS</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/color/48/000000/bootstrap.png"
          alt="Bootstrap"
        />
        <IconLabel>Bootstrap</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/color/48/000000/code-file.png"
          alt="Styled-components"
        />
        <IconLabel>Styled-components</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/color/48/000000/code-file.png"
          alt="Tailwind"
        />
        <IconLabel>Tailwind</IconLabel>
      </SkillsIconContainer>
    </ContentContainer>
  );
};

export const BackEnd = () => {
  return (
    <ContentContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/color/48/000000/nodejs.png"
          alt="Node.js"
        />
        <IconLabel>Node.js</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/color/48/000000/code-file.png"
          alt="Express"
        />
        <IconLabel>Express</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/color/48/000000/spring-logo.png"
          alt="Spring"
        />
        <IconLabel>Spring</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/color/48/000000/code-file.png"
          alt="ASP.Net Core"
        />
        <IconLabel>ASP.Net Core</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/ios-filled/50/000000/laravel.png"
          alt="Laravel"
        />
        <IconLabel>Laravel</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/color/48/000000/mongodb.png"
          alt="MongoDB"
        />
        <IconLabel>MongoDB</IconLabel>
      </SkillsIconContainer>
    </ContentContainer>
  );
};

export const Mobile = () => {
  return (
    <ContentContainer>
      <SkillsIconContainer noWidth>
        <img
          src="https://img.icons8.com/color/48/000000/react-native.png"
          alt="React-Native"
        />
        <IconLabel>React Native</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/color/48/000000/swift.png"
          alt="Swift"
        />
        <IconLabel>Swift</IconLabel>
      </SkillsIconContainer>
    </ContentContainer>
  );
};

export const ProgrammingLanguage = () => {
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
          src="https://img.icons8.com/color/48/000000/html.png"
          alt="HTML5"
        />
        <IconLabel>HTML5</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img src="https://img.icons8.com/color/48/000000/css.png" alt="css" />
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
        <img src="https://img.icons8.com/color/48/000000/sql.png" alt="SQL" />
        <IconLabel>SQL</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img src="https://img.icons8.com/color/48/000000/php.png" alt="PHP" />
        <IconLabel>PHP</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/color/48/000000/mysql.png"
          alt="MySQL"
        />
        <IconLabel>MySQL</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/color/48/000000/swift.png"
          alt="PL/SQL"
        />
        <IconLabel>PL/SQL</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img src="https://img.icons8.com/color/48/000000/r.png" alt="R" />
        <IconLabel>R</IconLabel>
      </SkillsIconContainer>
    </ContentContainer>
  );
};
