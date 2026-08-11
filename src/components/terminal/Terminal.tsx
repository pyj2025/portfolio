import React from "react";
import { TerminalRow } from "../window/WindowChrome";
import TwoBadges from "../welcome/TwoBadges";
import OneBadge from "../welcome/OneBadge";
import useScreenSize, { TABLET_MAX_WIDTH } from "../../utils/useScreenSize";
import OutputLine from "./OutputLine";
import { DIRECTORY, COMMAND_FILES_RECORD, HELP_TEXT, COMMAND_ENUM } from "./constants";
import { TerminalLine } from "./types";

const runCommand = (raw: string): string[] | "clear" => {
  const input = raw.trim();
  const [cmd, ...rest] = input.split(/\s+/);

  switch (cmd.toLowerCase()) {
    case COMMAND_ENUM.HELP:
      return HELP_TEXT;
    case COMMAND_ENUM.LS:
      return ["# ~/portfolio/", ...Object.keys(COMMAND_FILES_RECORD).map(name => `> ${name}`)];
    case COMMAND_ENUM.CAT: {
      const name = rest[0];
      if (!name) {
        return ["usage: cat <file> (try 'ls')"];
      }
      return COMMAND_FILES_RECORD[name] ?? [`cat: ${name}: No such file or directory`];
    }
    case COMMAND_ENUM.DATE:
      return [new Date().toString()];
    case COMMAND_ENUM.ECHO:
      return [rest.join(" ")];
    case COMMAND_ENUM.CLEAR:
      return "clear";
    case "":
      return [];
    default:
      return [`zsh: command not found: ${cmd} (try 'help')`];
  }
};

const Terminal: React.FC = () => {
  const { width } = useScreenSize();

  const Prompt = width <= TABLET_MAX_WIDTH ? OneBadge : TwoBadges;

  const [lines, setLines] = React.useState<TerminalLine[]>([
    {
      type: "out",
      text: "Welcome to Joon's terminal. Type 'ls' or 'help' to get started.",
    },
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
      className="w-full h-full bg-[#282a36] text-white py-2 overflow-y-auto cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      {lines.map((line, idx) =>
        line.type === "cmd" ? (
          <TerminalRow key={idx}>
            <div className="shrink-0">
              <Prompt directory={DIRECTORY} />
            </div>
            <div className="ml-2">{line.text}</div>
          </TerminalRow>
        ) : (
          <OutputLine key={idx} text={line.text} />
        ),
      )}
      <TerminalRow>
        <div className="shrink-0">
          <Prompt directory={DIRECTORY} />
        </div>
        <input
          ref={inputRef}
          autoFocus
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 min-w-0 ml-2 bg-transparent border-0 outline-none text-white p-0 caret-white"
          spellCheck={false}
          autoComplete="off"
        />
      </TerminalRow>
      <div ref={bottomRef} />
    </div>
  );
};

export default Terminal;
