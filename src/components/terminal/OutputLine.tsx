import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OutputLine: React.FC<{ text: string }> = ({ text }) => {
  const [, marker, rest] = /^(#{1,2}|>)\s(.*)$/.exec(text) ?? [];

  if (!marker) {
    return <div className="mx-2 px-2 break-words">{text}</div>;
  }

  return (
    <div className="flex flex-row justify-start items-center gap-2 mx-2 px-2">
      {marker === ">" ? <FontAwesomeIcon icon={faAngleRight as IconProp} /> : <div>{marker}</div>}
      <div className="break-words">{rest}</div>
    </div>
  );
};

export default React.memo(OutputLine);
