import React from "react";
import { DatabrickGenAIFundamentalsIcon } from "../../image/certifications/DatabrickGenAIFundamentals";
import { AboutIndexType } from "../../types";

interface CertificationsProps {
  toggleIndex: (index: AboutIndexType) => void;
}

const Certifications: React.FC<CertificationsProps> = ({ toggleIndex }) => {
  return (
    <div className="flex flex-row flex-wrap mt-2.5">
      <div
        className="flex flex-col w-16 h-16 justify-center items-center m-1 cursor-pointer"
        title="GenAIFundamentals"
        onClick={() => toggleIndex("GenAI")}
      >
        <DatabrickGenAIFundamentalsIcon />
      </div>
    </div>
  );
};

export default React.memo(Certifications);
