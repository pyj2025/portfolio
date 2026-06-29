import React from "react";
import { getIcon } from "./getIcon";
import useUtilStore from "../utils/useUtilStore";

const DesktopIcons: React.FC = () => {
  const openUtil = useUtilStore(state => state.openUtil);

  return (
    <div className="absolute top-8 right-6 z-0 flex flex-col items-center gap-4">
      <button
        title="Utils"
        onClick={openUtil}
        className="flex flex-col items-center gap-1 p-2 w-20 rounded-lg hover:bg-white/15 transition-colors"
      >
        {getIcon("FolderColor", 60)}
        <span
          className="text-xs text-white text-center"
          style={{ textShadow: "0 1px 3px rgba(0,0,0,0.7)" }}
        >
          Utils
        </span>
      </button>
    </div>
  );
};

export default DesktopIcons;
