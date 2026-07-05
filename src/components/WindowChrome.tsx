import React from "react";
import { Rnd } from "react-rnd";
import { cn } from "../utils/cn";

type DivProps = React.HTMLAttributes<HTMLDivElement>;
type SpanProps = React.HTMLAttributes<HTMLSpanElement>;
type ImgProps = React.ImgHTMLAttributes<HTMLImageElement>;

// text
export const BoldText: React.FC<SpanProps> = ({ className, ...props }) => (
  <span className={cn("font-bold", className)} {...props} />
);

export const MutedText: React.FC<SpanProps> = ({ className, ...props }) => (
  <span className={cn("opacity-50", className)} {...props} />
);

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

export const WindowTopbarContainer: React.FC<DivProps> = ({ className, ...props }) => (
  <div
    className={cn(
      "w-full h-9 bg-[var(--titlebar-bg)] backdrop-blur-xl text-[color:var(--wc-text)] border-t border-t-[color:var(--titlebar-highlight)] px-2.5 cursor-default grid grid-cols-3 mx-auto items-center box-border border-b-[0.2px] border-b-[color:var(--win-border)]",
      className,
    )}
    {...props}
  />
);

export const TopbarBtnContainer: React.FC<DivProps> = ({ className, ...props }) => (
  <div className={cn("flex justify-start items-center", className)} {...props} />
);

type TopbarBtnProps = DivProps & { color: string; disabled: boolean };

export const TopbarBtn: React.FC<TopbarBtnProps> = ({
  className,
  color,
  disabled,
  ...props
}) => (
  <div
    className={cn(
      "w-3 h-3 inline-block rounded-lg items-center align-middle text-[#62574c] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.25)]",
      color === "close" ? "ml-0" : "ml-2",
      disabled
        ? "bg-[#686B6D]"
        : color === "minimize"
        ? "bg-[#F7BD45]"
        : color === "expand"
        ? "bg-[#5FCB43]"
        : "bg-[#ee514a]",
      disabled ? "cursor-default" : "cursor-pointer",
      className,
    )}
    {...props}
  />
);

export const TopbarTitle: React.FC<DivProps> = ({ className, ...props }) => (
  <div
    className={cn("flex justify-center items-center text-center text-sm", className)}
    {...props}
  />
);

export const TopbarTitleText: React.FC<SpanProps> = ({ className, ...props }) => (
  <span className={cn("ml-1.5 pointer-events-none", className)} {...props} />
);

type WindowBodyProps = DivProps & { isMobile?: boolean };

export const WindowBody: React.FC<WindowBodyProps> = ({
  className,
  isMobile,
  ...props
}) => (
  <div
    className={cn(
      "grid w-full h-[calc(100%-36px)]",
      isMobile ? "grid-cols-[50px_auto]" : "grid-cols-[168px_auto]",
      className,
    )}
    {...props}
  />
);

export const WindowBodyNavbar: React.FC<DivProps> = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-col justify-start h-full bg-[var(--sidebar-bg)] backdrop-blur-xl text-[color:var(--nav-text)] border-r border-r-[color:var(--win-border)] pt-1 pb-2 overflow-x-hidden overflow-y-hidden hover:overflow-y-auto",
      className,
    )}
    {...props}
  />
);

export const NavSectionLabel: React.FC<DivProps> = ({ className, ...props }) => (
  <div
    className={cn(
      "shrink-0 px-3 pt-2 pb-1 text-[11px] font-medium uppercase tracking-wide text-[color:var(--wc-muted)]",
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
    className={cn("block min-w-0 truncate font-medium text-[13px] ml-1", className)}
    {...props}
  />
);

export const WindowBodyContent: React.FC<DivProps> = ({ className, ...props }) => (
  <div
    className={cn(
      "h-full bg-[var(--wc-bg)] text-[color:var(--wc-text)] overflow-x-hidden overflow-y-hidden hover:overflow-y-auto",
      className,
    )}
    {...props}
  />
);

// mobile window
export const MobileWindowBody: React.FC<DivProps> = ({ className, ...props }) => (
  <div className={cn("flex flex-row w-full h-[calc(100%-36px)]", className)} {...props} />
);

export const MobileNavbar: React.FC<DivProps> = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-col justify-start w-12 bg-[var(--sidebar-bg)] backdrop-blur-xl text-[color:var(--nav-text)] border-r border-r-[color:var(--win-border)] overflow-x-hidden overflow-y-auto",
      className,
    )}
    {...props}
  />
);

type MobileNavbarItemProps = DivProps & { focus: boolean; isChild?: boolean };

export const MobileNavbarItem: React.FC<MobileNavbarItemProps> = ({
  className,
  focus,
  isChild,
  ...props
}) => (
  <div
    className={cn(
      "flex flex-col justify-center items-center w-full h-12 shrink-0 cursor-pointer",
      focus
        ? "bg-[var(--accent)] text-white"
        : "bg-transparent text-[color:var(--nav-text)]",
      isChild ? "mt-px" : "",
      className,
    )}
    {...props}
  />
);

export const MobileNavbarMenu: React.FC<ImgProps> = ({ className, alt, ...props }) => (
  <img className={cn("h-6 w-6", className)} alt={alt ?? ""} {...props} />
);

export const MobileNavbarMenuLabel: React.FC<DivProps> = ({ className, ...props }) => (
  <div className={cn("text-base scale-50", className)} {...props} />
);

export const MobileBodyContent: React.FC<DivProps> = ({ className, ...props }) => (
  <div
    className={cn(
      "w-full h-full bg-[var(--wc-bg)] text-[color:var(--wc-text)] overflow-x-hidden overflow-y-hidden hover:overflow-y-auto",
      className,
    )}
    {...props}
  />
);

// mobile menu screen
type MobileWindowMenuItemProps = DivProps & { isEven?: boolean };

export const MobileWindowMenuItem: React.FC<MobileWindowMenuItemProps> = ({
  className,
  isEven,
  ...props
}) => (
  <div
    className={cn(
      "flex flex-row justify-start items-center text-[color:var(--wc-text)] px-2 py-1 w-full h-12 cursor-pointer",
      isEven ? "bg-transparent" : "bg-[var(--row-alt)]",
      className,
    )}
    {...props}
  />
);

export const MobileMenuItemLabel: React.FC<DivProps> = ({ className, ...props }) => (
  <div className={cn("font-bold ml-4", className)} {...props} />
);

// mobile panel
export const MobilePanelContainer: React.FC<DivProps> = ({ className, ...props }) => (
  <div
    className={cn("flex flex-col w-full text-[color:var(--wc-text)]", className)}
    {...props}
  />
);

export const MobileBackButtonContainer: React.FC<DivProps> = ({ className, ...props }) => (
  <div
    className={cn(
      "flex text-[color:var(--wc-text)] justify-start items-center h-6 p-2",
      className,
    )}
    {...props}
  />
);

export const MobileBackButton: React.FC<DivProps> = ({ className, ...props }) => (
  <div className={cn("fixed mt-3 p-2", className)} {...props} />
);
