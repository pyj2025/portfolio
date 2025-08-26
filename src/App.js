import { isIE } from "react-device-detect";
import Maintenance from "./components/Maintenance";
import NotSupport from "./components/NotSupport";
import MainApp from "./MainApp";

const IN_MAINTENANCE = false;

function App() {
  if (IN_MAINTENANCE) {
    return <Maintenance />;
  }

  if (isIE) {
    return <NotSupport />;
  }

  return <MainApp />;
}

export default App;
