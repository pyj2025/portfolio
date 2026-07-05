import React from "react";
import Typewriter from "./Typewriter";

type TypeCommandProps = {
  command: string;
  typeDone: () => void;
};

const TypeCommand: React.FC<TypeCommandProps> = ({ command, typeDone }) => {
  return (
    <div className="ml-2">
      <Typewriter text={command} onDone={typeDone} />
    </div>
  );
};

export default React.memo(TypeCommand);
