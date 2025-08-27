import React from "react";
import Typist from "react-typist";

const DEFAULT_CURSOR = {
  show: true,
  blink: true,
  element: "|",
  hideWhenDone: true,
  hideWhenDoneDelay: 100,
};

type LoadedProps = {
  setFirstLine: (flag: boolean) => void;
};

const Loaded: React.FC<LoadedProps> = ({ setFirstLine }) => {
  return (
    <Typist className="mt-2 ml-4" cursor={DEFAULT_CURSOR} onTypingDone={() => setFirstLine(true)}>
      Loaded...
    </Typist>
  );
};

export default React.memo(Loaded);
