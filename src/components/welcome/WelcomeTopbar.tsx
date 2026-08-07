import React from "react";
import useWindowsStore from "../../utils/useWindowsStore";
import { SMALL_ICON_SIZE, getIcon } from "../getIcon";
import WelcomeTopbarBtn from "./WelcomeTopbarBtn";

const WelcomeTopbar: React.FC = () => {
  const { focusedWindow, closeWelcomeWindow } = useWindowsStore(state => state);

  return (
    <div className="topbar w-full h-9 bg-[#2c2c2f]/95 backdrop-blur border-b border-[rgb(70,75,80)] px-2.5 py-0 cursor-default grid grid-cols-3 mx-auto items-center box-border">
      <div className="flex justify-start items-center">
        <WelcomeTopbarBtn
          color="close"
          title={focusedWindow === "Welcome" ? "Close" : undefined}
          onClick={closeWelcomeWindow}
          onTouchStart={closeWelcomeWindow}
          disabled={focusedWindow !== "Welcome"}
        />
        <WelcomeTopbarBtn color="disabled" disabled={true} />
        <WelcomeTopbarBtn color="disabled" disabled={true} />
      </div>
      <div className="flex justify-center items-center text-center text-sm">
        {getIcon("Terminal", SMALL_ICON_SIZE)}
        <span className="ml-1.5 pointer-events-none">Welcome</span>
      </div>
      <div></div>
    </div>
  );
};

export default WelcomeTopbar;
