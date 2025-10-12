import React from "react";
import { TerminalRow } from "../../../GlobalStyle";
import { OneBadge, TwoBadges, TypeCommand } from "..";

type TerminalThirdLineProps = {
  directory?: string;
  setThirdContent: (flag: boolean) => void;
};

const TerminalThirdLine: React.FC<TerminalThirdLineProps> = ({ directory, setThirdContent }) => {
  const handleDone = React.useCallback(() => {
    setThirdContent(true);
  }, [setThirdContent]);

  return (
    <TerminalRow>
      {directory ? <OneBadge directory={directory} /> : <TwoBadges directory="~/portfolio/" />}
      <TypeCommand command="cat contact.md" typeDone={handleDone} />
    </TerminalRow>
  );
};

export default React.memo(TerminalThirdLine);
