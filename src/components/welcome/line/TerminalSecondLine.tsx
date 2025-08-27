import React from "react";
import { TerminalRow } from "../../../GlobalStyle";
import TwoBadges from "../TwoBadges";
import TypeCommand from "../TypeCommand";
import FirstBadge from "../FirstBadge";

type TerminalSecondLineProps = {
  directory?: string;
  setSecondContent: (flag: boolean) => void;
  setThirdLine: (flag: boolean) => void;
};

const TerminalSecondLine: React.FC<TerminalSecondLineProps> = ({
  directory,
  setSecondContent,
  setThirdLine,
}) => {
  const handleDone = React.useCallback(() => {
    setSecondContent(true);
    setThirdLine(true);
  }, [setSecondContent, setThirdLine]);

  return (
    <TerminalRow>
      {directory ? <FirstBadge directory={directory} /> : <TwoBadges />}
      <TypeCommand command={"cat intro.md"} typeDone={handleDone} />
    </TerminalRow>
  );
};

export default React.memo(TerminalSecondLine);
