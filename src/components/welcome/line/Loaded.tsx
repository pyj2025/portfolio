import React from "react";
import Typewriter from "../Typewriter";

type LoadedProps = {
  setFirstLine: (flag: boolean) => void;
};

const Loaded: React.FC<LoadedProps> = ({ setFirstLine }) => {
  return (
    <div className="mt-2 ml-4">
      <Typewriter text="Loaded..." onDone={() => setFirstLine(true)} />
    </div>
  );
};

export default React.memo(Loaded);
