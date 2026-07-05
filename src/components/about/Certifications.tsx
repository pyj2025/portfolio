import React from "react";
import { DatabrickGenAIFundamentalsIcon } from "../../image/certifications/DatabrickGenAIFundamentals";
import { AboutIndexType, ViewMode } from "../../types";
import {
  FinderGrid,
  FinderGridItem,
  FinderList,
  FinderListRow,
} from "../FinderItems";

interface CertificationsProps {
  toggleIndex: (index: AboutIndexType) => void;
  view?: ViewMode;
}

const Certifications: React.FC<CertificationsProps> = ({
  toggleIndex,
  view = "icon",
}) => {
  return view === "list" ? (
    <FinderList>
      <FinderListRow
        label="GenAI Fundamentals"
        icon={
          <span className="scale-[0.4] flex items-center justify-center">
            <DatabrickGenAIFundamentalsIcon />
          </span>
        }
        onClick={() => toggleIndex("GenAI")}
      />
    </FinderList>
  ) : (
    <FinderGrid>
      <FinderGridItem
        label="GenAI"
        icon={<DatabrickGenAIFundamentalsIcon />}
        widthClass="w-20"
        onClick={() => toggleIndex("GenAI")}
      />
    </FinderGrid>
  );
};

export default React.memo(Certifications);
