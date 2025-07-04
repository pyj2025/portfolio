import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faTools, faClock } from "@fortawesome/free-solid-svg-icons";

const Maintenance: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faTools as IconProp} className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faClock as IconProp} className="w-3 h-3 text-white" />
                </div>
              </div>
            </div>

            <h1 className="text-2xl font-bold text-white">Under Maintenance</h1>

            <p className="text-slate-300 leading-relaxed">
              We're currently performing system maintenance to provide you with better service.
              Please check back later.
            </p>

            <div className="flex justify-center space-x-2 mt-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:0ms]"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce [animation-delay:100ms]"></div>
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce [animation-delay:200ms]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
