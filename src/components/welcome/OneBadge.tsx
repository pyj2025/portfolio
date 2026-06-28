import React from "react";
import SimpleBadge from "./SimpleBadge";

type OneBadgeProps = {
  directory: string;
};

const OneBadge: React.FC<OneBadgeProps> = () => {
  return (
    <div className="flex items-center">
      <SimpleBadge text="joon@MacBook-Air" />
    </div>
  );
};

export default React.memo(OneBadge);
