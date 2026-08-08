import React from "react";
import { Rnd } from "react-rnd";
import { cn } from "../utils/cn";

type DivProps = React.HTMLAttributes<HTMLDivElement>;
type SpanProps = React.HTMLAttributes<HTMLSpanElement>;

/**
 * How the sidebar looks when collapsed to an icon rail on mobile.
 *
 * `AppWindow` puts `.nav-collapsed` on the window body (a `group/window`) and
 * these variants react to it — that keeps the collapsed state described in one
 * place instead of spread across four components.
 */
const RAIL = {
  body: "group-[.nav-collapsed]/window:grid-cols-[56px_auto]",
  hide: "group-[.nav-collapsed]/window:hidden",
  // rows turn into an icon stacked over a small label
  item: "group-[.nav-collapsed]/window:flex group-[.nav-collapsed]/window:flex-col group-[.nav-collapsed]/window:items-center group-[.nav-collapsed]/window:gap-0.5 group-[.nav-collapsed]/window:pl-0 group-[.nav-collapsed]/window:pr-0 group-[.nav-collapsed]/window:py-1.5",
  label:
    "group-[.nav-collapsed]/window:ml-0 group-[.nav-collapsed]/window:w-full group-[.nav-collapsed]/window:px-0.5 group-[.nav-collapsed]/window:text-[9px] group-[.nav-collapsed]/window:leading-tight group-[.nav-collapsed]/window:text-center",
};

// terminal
export const TerminalRow: React.FC<DivProps> = ({ className, ...props }) => (
  <div
    className={cn("flex flex-row justify-start items-center mx-2 my-1", className)}
    {...props}
  />
);

// window
export const Window = React.forwardRef<
  Rnd,
  React.ComponentProps<typeof Rnd> & { children?: React.ReactNode }
>(({ className, ...props }, ref) => (
  <Rnd
    ref={ref}
    className={cn(
      "flex flex-row w-full justify-center items-center bg-[var(--wc-bg)] rounded-2xl overflow-hidden shadow-[0_22px_70px_rgba(0,0,0,0.5)]",
      className,
    )}
    {...props}
  />
));
Window.displayName = "Window";

export const WindowBody: React.FC<DivProps> = ({ className, ...props }) => (
  <div
    className={cn(
      "grid w-full h-[calc(100%-36px)] grid-cols-[168px_auto]",
      RAIL.body,
      className,
    )}
    {...props}
  />
);

export const WindowBodyNavbar: React.FC<DivProps> = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-col justify-start h-full bg-[var(--sidebar-bg)] backdrop-blur-xl text-[color:var(--nav-text)] border-r border-r-[color:var(--win-border)] pt-1 pb-2 overflow-x-hidden overflow-y-hidden hover:overflow-y-auto max-[899px]:overflow-y-auto",
      // clearance so the last item can scroll above the mobile collapse footer
      "max-[899px]:pb-14",
      className,
    )}
    {...props}
  />
);

export const NavSectionLabel: React.FC<DivProps> = ({ className, ...props }) => (
  <div
    className={cn(
      "shrink-0 px-3 pt-2 pb-1 text-[11px] font-medium uppercase tracking-wide text-[color:var(--wc-muted)]",
      RAIL.hide,
      className,
    )}
    {...props}
  />
);

type WindowBodyNavItmProps = DivProps & {
  focus: boolean;
  first?: boolean;
  isChild?: boolean;
};

export const WindowBodyNavItm: React.FC<WindowBodyNavItmProps> = ({
  className,
  focus,
  first,
  isChild,
  ...props
}) => (
  <div
    className={cn(
      "grid grid-cols-[20px_auto] shrink-0 items-center mx-2 pr-1.5 py-1 rounded-md cursor-pointer transition-colors",
      RAIL.item,
      focus
        ? "bg-[var(--accent)] text-white"
        : "text-[color:var(--nav-text)] hover:bg-[var(--hover-overlay)]",
      first ? "mt-1" : isChild ? "mt-px" : "",
      isChild ? "pl-6" : "pl-1.5",
      className,
    )}
    {...props}
  />
);

export const NavItmLabel: React.FC<SpanProps> = ({ className, ...props }) => (
  <span
    className={cn("block min-w-0 truncate font-medium text-[13px] ml-1", RAIL.label, className)}
    {...props}
  />
);

export const WindowBodyContent: React.FC<DivProps> = ({ className, ...props }) => (
  <div
    className={cn(
      "h-full bg-[var(--wc-bg)] text-[color:var(--wc-text)] overflow-x-hidden overflow-y-hidden hover:overflow-y-auto max-[899px]:overflow-y-auto",
      className,
    )}
    {...props}
  />
);
