import info from "../../info.json";

export const DIRECTORY = "~/portfolio/";

export enum COMMAND_ENUM {
  HELP = "help",
  LS = "ls",
  CAT = "cat",
  DATE = "date",
  ECHO = "echo",
  CLEAR = "clear",
}

export const COMMAND_FILES_RECORD: Record<string, string[]> = {
  "intro.md": [
    `# Hi, I'm ${info.about.info.name.firstName}.`,
    "> I'm a Full Stack Software developer who transforms digital dreams into reality.",
    "> I am passionate about developing both web and mobile applications.",
    "> I am an alumnus of Purdue University with a major in Computer Science.",
    "> Feel free to explore my portfolio and discover how I bring innovative ideas to life.",
  ],
  "contact.md": [
    "# Info",
    "## Email",
    `> ${info.about.info.email}`,
    "## GitHub",
    "> https://github.com/pyj2025",
    "## LinkedIn",
    "> https://www.linkedin.com/in/devjoon/",
  ],
  "skills.md": [
    "# Skills",
    "## Front-End",
    `> ${info.skills.front.join(", ")}`,
    "## Back-End",
    `> ${info.skills.back.join(", ")}`,
    "## Mobile",
    `> ${info.skills.mobile.join(", ")}`,
    "## Languages",
    `> ${info.skills.languages.join(", ")}`,
  ],
  "experience.md": [
    "# Experience",
    ...info.about.experience.flatMap(exp => [`## ${exp.title} — ${exp.company}`, `> ${exp.date}`]),
  ],
  "projects.md": [
    "# Projects",
    ...Object.values(info.project).flatMap(p => [`## ${p.name}`, `> ${p.stack.join(", ")}`]),
  ],
};

export const HELP_TEXT = [
  "# Available commands",
  "> ls — list the files in this directory",
  "> cat <file> — print a file",
  "> date — current date/time",
  "> echo ... — print text",
  "> clear — clear the screen",
];
