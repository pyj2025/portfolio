import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface StatProps {
  icon: IconProp;
  label: string;
  value: string;
}

const Stat: React.FC<StatProps> = ({ icon, label, value }) => (
  <div className="flex-1 flex flex-col items-center gap-0.5 rounded-xl bg-white/15 py-2">
    <FontAwesomeIcon icon={icon} className="text-sm opacity-80" />
    <div className="text-[15px] font-semibold leading-none">{value}</div>
    <div className="text-[10px] uppercase tracking-wide opacity-70">{label}</div>
  </div>
);

export default React.memo(Stat);
