import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faThLarge,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { cn } from "../utils/cn";

export type ViewMode = "icon" | "list";

interface WindowToolbarProps {
  onBack: () => void;
  onForward: () => void;
  canBack: boolean;
  canForward: boolean;
  view?: ViewMode;
  onViewChange?: (view: ViewMode) => void;
}

const navBtn =
  "w-6 h-6 flex items-center justify-center rounded-md text-white text-sm transition-colors";

const WindowToolbar: React.FC<WindowToolbarProps> = ({
  onBack,
  onForward,
  canBack,
  canForward,
  view,
  onViewChange,
}) => (
  <div className="w-full h-9 bg-[#2c2c2f]/95 backdrop-blur border-b border-b-[#141516] px-2.5 flex items-center justify-between box-border cursor-default">
    <div className="flex items-center gap-1">
      <button
        aria-label="Back"
        onClick={onBack}
        disabled={!canBack}
        className={cn(navBtn, canBack ? "hover:bg-white/10 cursor-pointer" : "opacity-30")}
      >
        <FontAwesomeIcon icon={faChevronLeft as IconProp} />
      </button>
      <button
        aria-label="Forward"
        onClick={onForward}
        disabled={!canForward}
        className={cn(navBtn, canForward ? "hover:bg-white/10 cursor-pointer" : "opacity-30")}
      >
        <FontAwesomeIcon icon={faChevronRight as IconProp} />
      </button>
    </div>

    {view && onViewChange && (
      <div className="flex items-center gap-0.5 rounded-md bg-black/25 p-0.5">
        <button
          aria-label="Icon view"
          onClick={() => onViewChange("icon")}
          className={cn(
            navBtn,
            view === "icon" ? "bg-white/15" : "text-white/55 hover:text-white",
          )}
        >
          <FontAwesomeIcon icon={faThLarge as IconProp} />
        </button>
        <button
          aria-label="List view"
          onClick={() => onViewChange("list")}
          className={cn(
            navBtn,
            view === "list" ? "bg-white/15" : "text-white/55 hover:text-white",
          )}
        >
          <FontAwesomeIcon icon={faList as IconProp} />
        </button>
      </div>
    )}
  </div>
);

export default WindowToolbar;
