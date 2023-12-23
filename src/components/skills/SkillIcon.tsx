import React from 'react';
import styled from 'styled-components';

import react from '../../image/skills/react-native.png';
import vue from '../../image/skills/vue.png';
import angular from '../../image/skills/angular.png';
import nextjs from '../../image/skills/nextjs.png';
import redux from '../../image/skills/redux.png';
import bootstrap from '../../image/skills/bootstrap.png';
import tailwindCss from '../../image/skills/tailwindcss.png';
import sass from '../../image/skills/sass.png';
import nodejs from '../../image/skills/nodejs.png';
import nestjs from '../../image/skills/nestjs.png';
import aws from '../../image/skills/aws.png';
import spring from '../../image/skills/spring-boot.png';
import mongoDB from '../../image/skills/mongodb.png';
import swift from '../../image/skills/swift.png';
import typescript from '../../image/skills/typescript.png';
import javascript from '../../image/skills/javascript.png';
import python from '../../image/skills/python.png';
import java from '../../image/skills/java.png';
import html from '../../image/skills/html.png';
import css from '../../image/skills/css.png';
import cSharp from '../../image/skills/c-sharp.png';
import cPlusPlus from '../../image/skills/c++.png';
import mySQL from '../../image/skills/mysql.png';
import rProject from '../../image/skills/r-project.png';
import laravel from '../../image/skills/laravel.png';
import styledComponents from '../../image/skills/styled-components.png';
import dotNetCore from '../../image/skills/aspDotNetCore.png';
import flutter from '../../image/skills/flutter.png';
import dart from '../../image/skills/dart.png';
import php from '../../image/skills/php.png';
import expressjs from '../../image/skills/expressjs.png';
import jquery from '../../image/skills/jquery.png';
import codeFile from '../../image/icons/codeFile.png';

const SkillsIconContainer = styled.div<{ noWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ noWidth }) => (noWidth ? undefined : '4rem')};
  height: 4rem;
  justify-content: center;
  align-items: center;
  margin: 0.25rem;
`;

const IconLabel = styled.div`
  font-size: 0.75rem;
  text-align: center;
  height: 1em;
  margin-top: 0.25rem;
`;

const IconImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 3rem;
  height: 3rem;
  background-color: white;
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
`;

export const getIcon = (name: string) => {
  switch (name) {
    case 'React':
      return <img src={react} alt={name} />;
    case 'Vue':
      return <img src={vue} alt={name} />;
    case 'Angular':
      return <img src={angular} alt={name} />;
    case 'Nextjs':
      return (
        <IconImageContainer>
          <img src={nextjs} alt={name} />
        </IconImageContainer>
      );
    case 'Redux':
      return <img src={redux} alt={name} />;
    case 'jQuery':
      return <img src={jquery} alt={name} style={{ width: 48, height: 48 }} />;
    case 'Bootstrap':
      return <img src={bootstrap} alt={name} />;
    case 'Tailwind':
      return <img src={tailwindCss} alt={name} />;
    case 'SASS':
      return <img src={sass} alt={name} />;
    case 'styled-components':
      return <img src={styledComponents} alt={name} />;
    case 'Node.js':
      return <img src={nodejs} alt={name} />;
    case 'Express':
      return (
        <IconImageContainer>
          <img src={expressjs} alt={name} style={{ width: 40, height: 40 }} />
        </IconImageContainer>
      );
    case 'NestJS':
      return <img src={nestjs} alt={name} />;
    case 'AWS':
      return (
        <IconImageContainer>
          <img src={aws} alt={name} style={{ width: 40, height: 40 }} />
        </IconImageContainer>
      );
    case 'Spring':
      return <img src={spring} alt={name} />;
    case 'Laravel':
      return <img src={laravel} alt={name} style={{ width: 48, height: 48 }} />;
    case 'MongoDB':
      return <img src={mongoDB} alt={name} />;
    case 'ASP.Net Core':
      return (
        <IconImageContainer>
          <img
            src={dotNetCore}
            alt={name}
            style={{ width: 40, height: 35.75 }}
          />
        </IconImageContainer>
      );

    case 'React Native':
      return <img src={react} alt={name} />;
    case 'Flutter':
      return <img src={flutter} alt={name} />;
    case 'Swift':
      return <img src={swift} alt={name} />;
    case 'TypeScript':
      return <img src={typescript} alt={name} />;
    case 'JavaScript':
      return <img src={javascript} alt={name} />;
    case 'Python':
      return <img src={python} alt={name} />;
    case 'Java':
      return (
        <IconImageContainer>
          <img src={java} alt={name} style={{ width: 40, height: 40 }} />
        </IconImageContainer>
      );
    case 'HTML5':
      return <img src={html} alt={name} />;
    case 'CSS3':
      return <img src={css} alt={name} />;
    case 'C#':
      return <img src={cSharp} alt={name} />;
    case 'C/C++':
      return <img src={cPlusPlus} alt={name} />;
    case 'MySQL':
      return (
        <IconImageContainer>
          <img src={mySQL} alt={name} style={{ width: 40, height: 40 }} />
        </IconImageContainer>
      );
    case 'PHP':
      return <img src={php} alt={name} style={{ width: 48, height: 48 }} />;
    case 'Dart':
      return <img src={dart} alt={name} />;
    case 'PL/SQL':
      return <img src={codeFile} alt={name} />;
    case 'R':
      return (
        <IconImageContainer>
          <img src={rProject} alt={name} style={{ width: 40, height: 40 }} />
        </IconImageContainer>
      );
    default:
      return <img src={codeFile} alt={name} />;
  }
};

export type SkillIconProps = {
  name: string;
  icon: string;
  background: boolean;
  iconStyles?: React.CSSProperties;
  noWidth?: boolean;
};

const SkillIcon: React.FC<SkillIconProps> = ({
  name,
  icon,
  background,
  iconStyles,
  noWidth,
}) => {
  return (
    <SkillsIconContainer noWidth={noWidth}>
      {getIcon(name)}
      <IconLabel>{name}</IconLabel>
    </SkillsIconContainer>
  );
};

export default SkillIcon;
