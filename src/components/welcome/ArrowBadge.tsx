import React from "react";
import { ARROW_WIDTH, BADGE_HEIGHT } from "./constants";

interface ArrowBadgeProps {
  leftText: string;
  rightText: string;
}

const ArrowBadge: React.FC<ArrowBadgeProps> = ({ leftText, rightText }) => {
  const leftWidth = leftText.length * 8 + 16;
  const rightWidth = rightText.length * 8 + 16;
  const totalWidth = leftWidth + rightWidth + ARROW_WIDTH * 2;

  return (
    <svg width={totalWidth} height={BADGE_HEIGHT} className="inline-block">
      <path
        d={`M 4 0 
            L ${leftWidth} 0 
            L ${leftWidth + ARROW_WIDTH} ${BADGE_HEIGHT / 2} 
            L ${leftWidth} ${BADGE_HEIGHT} 
            L 4 ${BADGE_HEIGHT} 
            Q 0 ${BADGE_HEIGHT - 4} 0 ${BADGE_HEIGHT / 2} 
            Q 0 4 4 0 Z`}
        fill="#000000"
      />

      <path
        d={`M ${leftWidth} 0 
            L ${leftWidth + ARROW_WIDTH + rightWidth} 0 
            L ${totalWidth} ${BADGE_HEIGHT / 2} 
            L ${leftWidth + ARROW_WIDTH + rightWidth} ${BADGE_HEIGHT} 
            L ${leftWidth} ${BADGE_HEIGHT}
            L ${leftWidth + ARROW_WIDTH} ${BADGE_HEIGHT / 2} Z`}
        fill="#caa9fa"
      />

      <text x="8" y="17" fill="white" fontSize="12" fontFamily="Monaco, 'Courier New', monospace">
        {leftText}
      </text>

      <text
        x={leftWidth + ARROW_WIDTH + 8}
        y="17"
        fill="black"
        fontSize="12"
        fontFamily="Monaco, 'Courier New', monospace"
      >
        {rightText}
      </text>
    </svg>
  );
};

export default React.memo(ArrowBadge);
