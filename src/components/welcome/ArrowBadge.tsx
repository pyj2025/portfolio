import React from "react";

type ArrowBadgeProps = {
  leftText: string;
  rightText: string;
};

const ArrowBadge: React.FC<ArrowBadgeProps> = ({ leftText, rightText }) => {
  const leftWidth = leftText.length * 8 + 16;
  const rightWidth = rightText.length * 8 + 16;
  const arrowWidth = 13;
  const totalWidth = leftWidth + rightWidth + arrowWidth * 2;
  const height = 26;

  return (
    <svg width={totalWidth} height={height} className="inline-block">
      <path
        d={`M 4 0 
            L ${leftWidth} 0 
            L ${leftWidth + arrowWidth} ${height / 2} 
            L ${leftWidth} ${height} 
            L 4 ${height} 
            Q 0 ${height - 4} 0 ${height / 2} 
            Q 0 4 4 0 Z`}
        fill="#000000"
      />

      <path
        d={`M ${leftWidth} 0 
            L ${leftWidth + arrowWidth + rightWidth} 0 
            L ${totalWidth} ${height / 2} 
            L ${leftWidth + arrowWidth + rightWidth} ${height} 
            L ${leftWidth} ${height}
            L ${leftWidth + arrowWidth} ${height / 2} Z`}
        fill="#caa9fa"
      />

      <text x="8" y="17" fill="white" fontSize="12" fontFamily="Monaco, 'Courier New', monospace">
        {leftText}
      </text>

      <text
        x={leftWidth + arrowWidth + 8}
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
