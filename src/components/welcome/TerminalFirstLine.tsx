import React from 'react';
import { TerminalRow } from '../../GlobalStyle';
import FirstBadge from './FirstBadge';
import TypeCommand from './TypeCommand';

type TerminalFirstLineProps = {
  directory?: string;
  setSecondLine: (flag: boolean) => void;
};

const TerminalFirstLine: React.FC<TerminalFirstLineProps> = ({
  directory = 'joon@MacBook-Air',
  setSecondLine,
}) => {
  const handleDone = React.useCallback(() => {
    setSecondLine(true);
  }, [setSecondLine]);

  return (
    <TerminalRow>
      <FirstBadge directory={directory} />
      <TypeCommand command={'cd portfolio'} typeDone={handleDone} />
    </TerminalRow>
  );
};

export default React.memo(TerminalFirstLine);
