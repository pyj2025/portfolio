import { isIE } from "react-device-detect";
import Maintenance from "./components/Maintenance";
import NotSupport from "./components/NotSupport";
import MainApp from "./MainApp";

const inMaintenance = false;

function App() {
  if (inMaintenance) {
    return <Maintenance />;
  }

  if (isIE) {
    return <NotSupport />;
  }

  return <MainApp />;
}

export default App;
