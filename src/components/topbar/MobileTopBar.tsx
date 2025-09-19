import React from "react";
import useScreenSize from "../../utils/useScreenSize";

const MobileTopBar: React.FC = () => {
  const { width } = useScreenSize();

  return (
    <div
      className="flex justify-center items-center bg-black bg-opacity-40 text-white h-6"
      style={{ width: `${width}px` }}
    >
      <span className="font-bold">Youngjoon Park</span>
    </div>
  );
};

export default MobileTopBar;
