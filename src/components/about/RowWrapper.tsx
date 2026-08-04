import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const RowWrapper: React.FC<{
  icon: IconProp;
  label: string;
  children: React.ReactNode;
}> = ({ icon, label, children }) => (
  <div className="flex items-center gap-3 px-3 py-2">
    <span className="flex items-center justify-center w-7 h-7 rounded-md bg-[var(--hover-overlay)] text-[color:var(--wc-muted)] text-sm shrink-0">
      <FontAwesomeIcon icon={icon} />
    </span>
    <div className="flex flex-col min-w-0">
      <span className="text-[11px] uppercase tracking-wide text-[color:var(--wc-muted)]">
        {label}
      </span>
      <span className="text-[13px] break-words">{children}</span>
    </div>
  </div>
);

export default RowWrapper;
