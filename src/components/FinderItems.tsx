import React from "react";
import { cn } from "../utils/cn";

type FinderGridItemProps = {
  label: string;
  icon: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  selected?: boolean;
  widthClass?: string;
};

/** macOS Finder icon-view item: square icon highlight + separate label pill. */
export const FinderGridItem: React.FC<FinderGridItemProps> = ({
  label,
  icon,
  onClick,
  selected = false,
  widthClass = "w-16",
}) => (
  <button
    aria-label={label}
    onClick={onClick}
    className={cn(
      "group flex flex-col items-center cursor-pointer select-none bg-transparent",
      widthClass,
    )}
  >
    <div
      className={cn(
        "flex items-center justify-center rounded-lg p-1 transition-colors",
        selected
          ? "bg-[var(--hover-overlay-strong)]"
          : "group-hover:bg-[var(--hover-overlay)]",
      )}
    >
      {icon}
    </div>
    <div
      className={cn(
        "mt-1 max-w-full px-1.5 py-px rounded text-xs leading-tight text-center break-words transition-colors",
        selected
          ? "bg-[var(--accent)] text-white"
          : "text-[color:var(--wc-text)] group-hover:bg-[var(--hover-overlay-strong)]",
      )}
    >
      {label}
    </div>
  </button>
);

type FinderListRowProps = {
  label: string;
  icon: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  trailing?: React.ReactNode;
  compact?: boolean;
};

/** macOS Finder list-view row: small icon + name (+ optional trailing text). */
export const FinderListRow: React.FC<FinderListRowProps> = ({
  label,
  icon,
  onClick,
  trailing,
  compact = true,
}) => (
  <button
    aria-label={label}
    onClick={onClick}
    className={cn(
      "flex flex-row items-center gap-2.5 w-full px-3 rounded-md cursor-pointer hover:bg-[var(--hover-overlay)] transition-colors text-left bg-transparent",
      compact ? "py-1" : "py-2",
    )}
  >
    <span className="flex items-center justify-center w-6 h-6 shrink-0">{icon}</span>
    <span className="text-sm text-[color:var(--wc-text)] truncate">{label}</span>
    {trailing ? (
      <span className="ml-auto text-xs text-[color:var(--wc-muted)] shrink-0">
        {trailing}
      </span>
    ) : null}
  </button>
);

/** Container for grid items — matches Finder icon-view spacing. */
export const FinderGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex flex-row flex-wrap gap-2 m-2.5">{children}</div>
);

/** Container for list rows — matches Finder list-view spacing. */
export const FinderList: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex flex-col gap-0.5 p-2">{children}</div>
);
