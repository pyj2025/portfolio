import React from "react";

import { isIE } from "react-device-detect";
import Maintenance from "./components/Maintenance";
import NotSupport from "./components/NotSupport";
import MainApp from "./MainApp";

const inMaintenance = false;

function App() {
  const component = inMaintenance ? (
    <Maintenance />
  ) : isIE ? (
    <NotSupport />
  ) : (
    <MainApp />
  );

  return <>{component}</>;
}

export default App;
