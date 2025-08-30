import React from "react";
import ArrowBadge from "./ArrowBadge";

type TwoBadgesProps = {
  directory: string;
};

const TwoBadges: React.FC<TwoBadgesProps> = ({ directory }) => {
  return (
    <div className="flex items-center">
      <ArrowBadge leftText="joon@MacBook-Air" rightText={directory} />
    </div>
  );
};

export default React.memo(TwoBadges);
