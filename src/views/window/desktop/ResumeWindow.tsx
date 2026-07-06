import React from "react";
import AppWindow from "../../../components/AppWindow";
import info from "../../../info.json";

const ResumeWindow: React.FC = () => (
  <AppWindow
    id="Resume"
    defaultSize={{ width: 600, height: 760 }}
    defaultPosition={({ width }) => ({ x: Math.max(width - 600 - 40, 20), y: 40 })}
    minWidth={360}
    minHeight={400}
  >
    <div className="w-full h-full bg-white">
      <iframe
        src={info.resume.url}
        title="Resume"
        className="w-full h-full border-0"
        allow="autoplay"
      />
    </div>
  </AppWindow>
);

export default ResumeWindow;
