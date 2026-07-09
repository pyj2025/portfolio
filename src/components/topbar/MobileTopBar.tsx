import React from "react";
import useScreenSize from "../../utils/useScreenSize";

const MobileTopBar: React.FC = () => {
  const { width } = useScreenSize();

  return (
    <div
      className="flex justify-center items-center bg-black/40 text-white h-8"
      style={{ width: `${width}px` }}
    >
      <span className="font-bold">Joon (Youngjoon) Park</span>
    </div>
  );
};

export default MobileTopBar;
