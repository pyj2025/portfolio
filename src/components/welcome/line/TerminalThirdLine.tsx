import React from "react";
import { TerminalRow } from "../../../GlobalStyle";
import TwoBadges from "../TwoBadges";
import TypeCommand from "../TypeCommand";
import FirstBadge from "../FirstBadge";

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
      {directory ? <FirstBadge directory={directory} /> : <TwoBadges />}
      <TypeCommand command={"cat contact.md"} typeDone={handleDone} />
    </TerminalRow>
  );
};

export default React.memo(TerminalThirdLine);
