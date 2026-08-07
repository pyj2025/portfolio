import React from "react";
import { ARROW_WIDTH, BADGE_HEIGHT } from "./constants";

interface SimpleBadgeProps {
  text: string;
}

const SimpleBadge: React.FC<SimpleBadgeProps> = ({ text }) => {
  const textWidth = text.length * 8 + 16;
  const totalWidth = textWidth + ARROW_WIDTH;

  return (
    <svg width={totalWidth} height={BADGE_HEIGHT} className="inline-block">
      <path
        d={`M 4 0 
            L ${textWidth} 0 
            L ${totalWidth} ${BADGE_HEIGHT / 2} 
            L ${textWidth} ${BADGE_HEIGHT} 
            L 4 ${BADGE_HEIGHT} 
            Q 0 ${BADGE_HEIGHT - 4} 0 ${BADGE_HEIGHT / 2} 
            Q 0 4 4 0 Z`}
        fill="#000000"
      />

      <text x="8" y="17" fill="white" fontSize="12" fontFamily="Monaco, 'Courier New', monospace">
        {text}
      </text>
    </svg>
  );
};

export default React.memo(SimpleBadge);
