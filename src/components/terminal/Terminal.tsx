import React from "react";
import info from "../../info.json";

type TerminalLine = {
  type: "cmd" | "out";
  text: string;
};

const HELP_TEXT = [
  "Available commands:",
  "  help       show this list",
  "  whoami     who am I?",
  "  projects   list my projects",
  "  skills     list my tech skills",
  "  contact    how to reach me",
  "  date       current date/time",
  "  echo ...   print text",
  "  clear      clear the screen",
];

const runCommand = (raw: string): string[] | "clear" => {
  const input = raw.trim();
  const [cmd, ...rest] = input.split(/\s+/);

  switch (cmd.toLowerCase()) {
    case "help":
      return HELP_TEXT;
    case "whoami":
      return [
        `${info.about.info.name.firstName} ${info.about.info.name.lastName} — Full Stack Software Developer`,
        "Based in Vancouver, BC. Purdue CS alum.",
      ];
    case "projects":
      return [
        "My projects:",
        ...Object.values(info.project).map(
          p => `  ${p.name}  (${p.stack.join(", ")})`,
        ),
        "Open the Projects window for details.",
      ];
    case "skills":
      return [
        `Front-End : ${info.skills.front.join(", ")}`,
        `Back-End  : ${info.skills.back.join(", ")}`,
        `Mobile    : ${info.skills.mobile.join(", ")}`,
        `Languages : ${info.skills.languages.join(", ")}`,
      ];
    case "contact":
      return [
        `Email    : ${info.about.info.email}`,
        "GitHub   : https://github.com/pyj2025",
        "LinkedIn : https://www.linkedin.com/in/devjoon/",
      ];
    case "date":
      return [new Date().toString()];
    case "echo":
      return [rest.join(" ")];
    case "clear":
      return "clear";
    case "":
      return [];
    default:
      return [`zsh: command not found: ${cmd} (try 'help')`];
  }
};

const PROMPT = "joon@portfolio ~ %";

const Terminal: React.FC = () => {
  const [lines, setLines] = React.useState<TerminalLine[]>([
    { type: "out", text: "Welcome to Joon's terminal. Type 'help' to get started." },
  ]);
  const [value, setValue] = React.useState("");
  const [history, setHistory] = React.useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = React.useState(-1);

  const inputRef = React.useRef<HTMLInputElement>(null);
  const bottomRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: "end" });
  }, [lines]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const result = runCommand(value);
      if (result === "clear") {
        setLines([]);
      } else {
        setLines(prev => [
          ...prev,
          { type: "cmd", text: value },
          ...result.map(text => ({ type: "out" as const, text })),
        ]);
      }
      if (value.trim()) {
        setHistory(prev => [...prev, value]);
      }
      setHistoryIdx(-1);
      setValue("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const idx = historyIdx === -1 ? history.length - 1 : Math.max(historyIdx - 1, 0);
      setHistoryIdx(idx);
      setValue(history[idx]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx === -1) return;
      const idx = historyIdx + 1;
      if (idx >= history.length) {
        setHistoryIdx(-1);
        setValue("");
      } else {
        setHistoryIdx(idx);
        setValue(history[idx]);
      }
    }
  };

  return (
    <div
      className="w-full h-full bg-[#282a36] text-[#f8f8f2] font-mono text-[13px] leading-relaxed p-2.5 overflow-y-auto cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      {lines.map((line, idx) =>
        line.type === "cmd" ? (
          <div key={idx} className="flex gap-2">
            <span className="text-[#50fa7b] shrink-0">{PROMPT}</span>
            <span>{line.text}</span>
          </div>
        ) : (
          <div key={idx} className="whitespace-pre-wrap break-words">
            {line.text}
          </div>
        ),
      )}
      <div className="flex gap-2">
        <span className="text-[#50fa7b] shrink-0">{PROMPT}</span>
        <input
          ref={inputRef}
          autoFocus
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent border-0 outline-none text-[#f8f8f2] font-mono text-[13px] p-0 caret-[#f8f8f2]"
          spellCheck={false}
          autoComplete="off"
        />
      </div>
      <div ref={bottomRef} />
    </div>
  );
};

export default Terminal;
