import React from "react";
import SimpleBadge from "./SimpleBadge";

interface OneBadgeProps {
  directory?: string;
}

const OneBadge: React.FC<OneBadgeProps> = ({ directory = "joon@MacBook-Air" }) => {
  return (
    <div className="flex items-center">
      <SimpleBadge text={directory} />
    </div>
  );
};

export default React.memo(OneBadge);
