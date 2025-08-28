import React from "react";
import ArrowBadge from "./ArrowBadge";

type TwoBadgeProps = {
  directory: string;
};

const TwoBadge: React.FC<TwoBadgeProps> = ({ directory }) => {
  return (
    <div className="flex items-center">
      <ArrowBadge leftText="joon@MacBook-Air" rightText={directory} />
    </div>
  );
};

export default React.memo(TwoBadge);
