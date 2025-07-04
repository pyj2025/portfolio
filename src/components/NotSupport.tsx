import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faExclamationTriangle, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faChrome, faFirefox, faSafari, faEdge } from "@fortawesome/free-brands-svg-icons";

const browsers = [
  { name: "Chrome", icon: faChrome, color: "text-blue-500" },
  { name: "Firefox", icon: faFirefox, color: "text-orange-500" },
  { name: "Safari", icon: faSafari, color: "text-blue-400" },
  { name: "Edge", icon: faEdge, color: "text-green-500" },
];

const NotSupport: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 flex items-center justify-center p-4">
      <div className="max-w-lg w-full">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faExclamationTriangle as IconProp}
                    className="w-8 h-8 text-white"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faGlobe as IconProp} className="w-3 h-3 text-white" />
                </div>
              </div>
            </div>

            <h1 className="text-2xl font-bold text-white">Browser Not Supported</h1>

            <p className="text-red-100 leading-relaxed">
              We're sorry, but Internet Explorer is not supported. For the best experience, please
              use one of these modern browsers:
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              {browsers.map((browser, index) => (
                <div
                  key={browser.name}
                  className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <FontAwesomeIcon
                    icon={browser.icon as IconProp}
                    className={`w-6 h-6 ${browser.color}`}
                  />
                  <span className="text-white font-medium">{browser.name}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30">
              <p className="text-blue-100 text-sm">
                💡 These browsers offer better security, performance, and features
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-red-200 text-sm">Thank you for your understanding</p>
        </div>
      </div>
    </div>
  );
};

export default NotSupport;
