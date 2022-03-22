import React from "react";

const useClickOutside = (
  ref: React.MutableRefObject<HTMLDivElement | null>,
  callback: VoidFunction
) => {
  const handleClick = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default useClickOutside;
