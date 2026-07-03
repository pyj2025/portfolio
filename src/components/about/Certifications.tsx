import React from "react";
import { DatabrickGenAIFundamentalsIcon } from "../../image/certifications/DatabrickGenAIFundamentals";
import { AboutIndexType, ViewMode } from "../../types";

interface CertificationsProps {
  toggleIndex: (index: AboutIndexType) => void;
  view?: ViewMode;
}

const Certifications: React.FC<CertificationsProps> = ({
  toggleIndex,
  view = "icon",
}) => {
  return view === "list" ? (
    <div className="flex flex-col gap-0.5 p-2">
      <button
        aria-label="GenAI Fundamentals"
        onClick={() => toggleIndex("GenAI")}
        className="flex flex-row items-center gap-2.5 w-full px-3 py-1 rounded-md cursor-pointer hover:bg-[var(--hover-overlay)] transition-colors text-left bg-transparent"
      >
        <span className="flex items-center justify-center w-6 h-6 shrink-0">
          <span className="scale-[0.4] flex items-center justify-center">
            <DatabrickGenAIFundamentalsIcon />
          </span>
        </span>
        <span className="text-sm text-[color:var(--wc-text)]">
          GenAI Fundamentals
        </span>
      </button>
    </div>
  ) : (
    <div className="flex flex-row flex-wrap gap-2 m-2.5">
      <button
        aria-label="GenAI Fundamentals"
        onClick={() => toggleIndex("GenAI")}
        className="group flex flex-col items-center w-20 cursor-pointer select-none bg-transparent"
      >
        <div className="flex items-center justify-center rounded-lg p-1 transition-colors group-hover:bg-[var(--hover-overlay)]">
          <DatabrickGenAIFundamentalsIcon />
        </div>
        <div className="mt-1 max-w-full px-1.5 py-px rounded text-xs leading-tight text-center text-[color:var(--wc-text)] transition-colors group-hover:bg-[var(--hover-overlay-strong)]">
          GenAI
        </div>
      </button>
    </div>
  );
};

export default React.memo(Certifications);
