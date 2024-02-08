import React from 'react';
import Typist from 'react-typist';
import { TerminalLine } from '../../GlobalStyle';

type TypeCommandProps = {
  command: string;
  typeDone: () => void;
};

const TypeCommand: React.FC<TypeCommandProps> = ({ command, typeDone }) => {
  return (
    <TerminalLine>
      <Typist
        cursor={{
          show: true,
          blink: true,
          element: '|',
          hideWhenDone: true,
          hideWhenDoneDelay: 100,
        }}
        onTypingDone={typeDone}
      >
        {command}
      </Typist>
    </TerminalLine>
  );
};

export default React.memo(TypeCommand);
