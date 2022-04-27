import React from "react";

import { isIE } from "react-device-detect";
import Maintenance from "./components/Maintenance";
import NotSupport from "./components/NotSupport";
import MainApp from "./MainApp";

function App() {
  const [inMaintenance, setMaintenance] = React.useState(false);

  return (
    <>
      {inMaintenance ? <Maintenance /> : null}
      {isIE ? <NotSupport /> : null}
      {!inMaintenance && !isIE ? <MainApp /> : null}
    </>
  );
}

export default App;
