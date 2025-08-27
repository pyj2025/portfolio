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

type FirstBadgeProps = {
  directory: string;
};

const FirstBadge: React.FC<FirstBadgeProps> = () => {
  return (
    <div className="flex items-center">
      <SimpleBadge text="joon@MacBook-Air" />
    </div>
  );
};

type SecondBadgeProps = {
  directory: string;
  command: string;
};

const SecondBadge: React.FC<SecondBadgeProps> = ({ directory, command }) => {
  return (
    <div className="flex items-center">
      <ArrowBadge leftText="joon@MacBook-Air" rightText={directory} />
      <span className="text-white font-mono text-sm ml-2">{command}</span>
    </div>
  );
};

export default React.memo(FirstBadge);
export { SecondBadge, SimpleBadge, ArrowBadge };
