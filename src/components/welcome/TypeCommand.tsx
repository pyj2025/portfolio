import React from "react";
import Typist from "react-typist";
import { TerminalLine } from "../../GlobalStyle";

const DEFAULT_CURSOR = {
  show: true,
  blink: true,
  element: "|",
  hideWhenDone: true,
  hideWhenDoneDelay: 100,
};

type TypeCommandProps = {
  command: string;
  typeDone: () => void;
};

const TypeCommand: React.FC<TypeCommandProps> = ({ command, typeDone }) => {
  return (
    <div className="ml-2">
      <Typist cursor={DEFAULT_CURSOR} onTypingDone={typeDone}>
        {command}
      </Typist>
    </div>
  );
};

export default React.memo(TypeCommand);
