import { SkillsNavItemType, SkillIconConfig } from "./types";
import react from "../../image/skills/react.png";
import vue from "../../image/skills/vue.png";
import angular from "../../image/skills/angular.png";
import nextjs from "../../image/skills/nextjs.png";
import redux from "../../image/skills/redux.png";
import bootstrap from "../../image/skills/bootstrap.png";
import tailwindCss from "../../image/skills/tailwindcss.png";
import sass from "../../image/skills/sass.png";
import nodejs from "../../image/skills/nodejs.png";
import nestjs from "../../image/skills/nestjs.png";
import aws from "../../image/skills/aws.png";
import spring from "../../image/skills/spring-boot.png";
import mongoDB from "../../image/skills/mongodb.png";
import swift from "../../image/skills/swift.png";
import typescript from "../../image/skills/typescript.png";
import javascript from "../../image/skills/javascript.png";
import python from "../../image/skills/python.png";
import java from "../../image/skills/java.png";
import html from "../../image/skills/html.png";
import css from "../../image/skills/css.png";
import cSharp from "../../image/skills/c-sharp.png";
import cPlusPlus from "../../image/skills/c++.png";
import mySQL from "../../image/skills/mysql.png";
import rProject from "../../image/skills/r-project.png";
import laravel from "../../image/skills/laravel.png";
import styledComponents from "../../image/skills/styled-components.png";
import dotNetCore from "../../image/skills/aspDotNetCore.png";
import flutter from "../../image/skills/flutter.png";
import dart from "../../image/skills/dart.png";
import php from "../../image/skills/php.png";
import expressjs from "../../image/skills/expressjs.png";
import jquery from "../../image/skills/jquery.png";
import codeFile from "../../image/icons/codeFile.png";

const NO_BACKGROUND_ICON_SIZE = 48;
const BACKGROUND_ICON_SIZE = 40;

export const SKILLS_NAV_ITEMS: SkillsNavItemType[] = [
  {
    id: "Front",
    title: "Front-End",
    icon: "Folder",
    label: "Front-End",
  },
  {
    id: "Back",
    title: "Back-End",
    icon: "Folder",
    label: "Back-End",
  },
  {
    id: "Mobile",
    title: "Mobile",
    icon: "Folder",
    label: "Mobile",
  },
  {
    id: "Programming",
    title: "Language",
    icon: "CodeFile",
    label: "Language",
  },
];

export const SKILL_ICONS: Record<string, SkillIconConfig> = {
  React: { src: react, size: NO_BACKGROUND_ICON_SIZE },
  "React Native": { src: react, size: NO_BACKGROUND_ICON_SIZE },
  Vue: { src: vue },
  Angular: { src: angular },
  Nextjs: { src: nextjs, bg: true },
  Redux: { src: redux },
  jQuery: { src: jquery, size: NO_BACKGROUND_ICON_SIZE },
  Bootstrap: { src: bootstrap },
  Tailwind: { src: tailwindCss },
  SASS: { src: sass },
  "styled-components": { src: styledComponents },
  "Node.js": { src: nodejs },
  Express: { src: expressjs, bg: true, size: BACKGROUND_ICON_SIZE },
  NestJS: { src: nestjs },
  AWS: { src: aws, bg: true, size: BACKGROUND_ICON_SIZE },
  Spring: { src: spring },
  Laravel: { src: laravel, size: NO_BACKGROUND_ICON_SIZE },
  MongoDB: { src: mongoDB },
  "ASP.Net Core": { src: dotNetCore, bg: true, size: BACKGROUND_ICON_SIZE, height: 35.75 },
  Flutter: { src: flutter },
  Swift: { src: swift },
  TypeScript: { src: typescript },
  JavaScript: { src: javascript },
  Python: { src: python },
  Java: { src: java, bg: true, size: BACKGROUND_ICON_SIZE },
  HTML5: { src: html },
  CSS3: { src: css },
  "C#": { src: cSharp },
  "C/C++": { src: cPlusPlus },
  MySQL: { src: mySQL, bg: true, size: BACKGROUND_ICON_SIZE },
  PHP: { src: php, size: NO_BACKGROUND_ICON_SIZE },
  Dart: { src: dart },
  "PL/SQL": { src: codeFile, size: NO_BACKGROUND_ICON_SIZE },
  R: { src: rProject, bg: true, size: BACKGROUND_ICON_SIZE },
};

export const SKILL_LINKS: Record<string, string> = {
  React: "https://react.dev",
  Vue: "https://vuejs.org",
  Angular: "https://angular.dev",
  Nextjs: "https://nextjs.org",
  Redux: "https://redux.js.org",
  jQuery: "https://jquery.com",
  Bootstrap: "https://getbootstrap.com",
  SASS: "https://sass-lang.com",
  Tailwind: "https://tailwindcss.com",
  "styled-components": "https://styled-components.com",
  "Node.js": "https://nodejs.org",
  Express: "https://expressjs.com",
  NestJS: "https://nestjs.com",
  AWS: "https://aws.amazon.com",
  Spring: "https://spring.io",
  Laravel: "https://laravel.com",
  MongoDB: "https://www.mongodb.com",
  "ASP.Net Core": "https://learn.microsoft.com/aspnet/core",
  "React Native": "https://reactnative.dev",
  Flutter: "https://flutter.dev",
  Swift: "https://www.swift.org",
  TypeScript: "https://www.typescriptlang.org",
  JavaScript: "https://developer.mozilla.org/docs/Web/JavaScript",
  Python: "https://www.python.org",
  Java: "https://dev.java",
  "C#": "https://learn.microsoft.com/dotnet/csharp/",
  Dart: "https://dart.dev",
  "C/C++": "https://isocpp.org",
  PHP: "https://www.php.net",
  HTML5: "https://developer.mozilla.org/docs/Web/HTML",
  CSS3: "https://developer.mozilla.org/docs/Web/CSS",
  MySQL: "https://www.mysql.com",
  "PL/SQL": "https://www.oracle.com/database/technologies/appdev/plsql.html",
  R: "https://www.r-project.org",
};
