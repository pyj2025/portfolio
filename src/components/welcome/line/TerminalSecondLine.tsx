import React from "react";
import { TerminalRow } from "../../../GlobalStyle";
import TwoBadges from "../TwoBadges";
import TypeCommand from "../TypeCommand";
import OneBadge from "../OneBadge";

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
      {directory ? <OneBadge directory={directory} /> : <TwoBadges directory="~/portfolio/" />}
      <TypeCommand command="cat intro.md" typeDone={handleDone} />
    </TerminalRow>
  );
};

export default React.memo(TerminalSecondLine);
