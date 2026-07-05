import { isIE } from "react-device-detect";
import { Maintenance, NotSupport } from "./components";
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
