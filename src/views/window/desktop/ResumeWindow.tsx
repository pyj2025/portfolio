import React from "react";
import AppWindow from "../../../components/AppWindow";

const RESUME_URL =
  "https://drive.google.com/file/d/14bb5ogfmAumTw7cMA_0PEUVwsPE_mOd-/preview";

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
        src={RESUME_URL}
        title="Resume"
        className="w-full h-full border-0"
        allow="autoplay"
      />
    </div>
  </AppWindow>
);

export default ResumeWindow;
