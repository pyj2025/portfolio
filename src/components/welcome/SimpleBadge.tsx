import React from "react";

type SimpleBadgeProps = {
  text: string;
};

const SimpleBadge: React.FC<SimpleBadgeProps> = ({ text }) => {
  const textWidth = text.length * 8 + 16;
  const arrowWidth = 13;
  const totalWidth = textWidth + arrowWidth;
  const height = 26;

  return (
    <svg width={totalWidth} height={height} className="inline-block">
      <path
        d={`M 4 0 
            L ${textWidth} 0 
            L ${totalWidth} ${height / 2} 
            L ${textWidth} ${height} 
            L 4 ${height} 
            Q 0 ${height - 4} 0 ${height / 2} 
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
