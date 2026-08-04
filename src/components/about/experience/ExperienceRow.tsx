import React from "react";
import { FinderListRow } from "../../FinderItems";
import { getIcon } from "../../getIcon";
import { ExperienceType } from "../types";

interface ExperienceRowProps {
  experience: ExperienceType;
  showDate: boolean;
  isMobile?: boolean;
  onOpen?: (experience: ExperienceType) => void;
}

const ExperienceRow: React.FC<ExperienceRowProps> = ({
  isMobile = false,
  experience,
  showDate,
  onOpen,
}) => (
  <FinderListRow
    label={experience.title}
    icon={getIcon("File", 20)}
    trailing={showDate ? experience.date : undefined}
    compact={!isMobile}
    onClick={() => onOpen?.(experience)}
  />
);

export default React.memo(ExperienceRow);
