type TerminalLineType = "cmd" | "out";

export type TerminalLine = {
  type: TerminalLineType;
  text: string;
};
