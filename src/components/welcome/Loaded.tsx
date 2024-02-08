import React from 'react';
import Typist from 'react-typist';
import styled from 'styled-components';
import { TerminalRow } from '../../GlobalStyle';

const LoadedCommandLine = styled(Typist)`
  margin-top: 8px;
`;

type LoadedProps = {
  setFirstLine: (flag: boolean) => void;
};

const Loaded: React.FC<LoadedProps> = ({ setFirstLine }) => {
  return (
    <TerminalRow>
      <LoadedCommandLine
        cursor={{
          show: true,
          blink: true,
          element: '|',
          hideWhenDone: true,
          hideWhenDoneDelay: 100,
        }}
        onTypingDone={() => setFirstLine(true)}
      >
        Loaded...
      </LoadedCommandLine>
    </TerminalRow>
  );
};

export default React.memo(Loaded);
