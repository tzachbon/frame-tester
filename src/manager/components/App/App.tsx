import * as React from "react";
import ChromeListener from "../../../utils/chrome.util";
import { ValuesType } from "utility-types";
import { FRAMES, ACTIONS } from "../../../models/frame";

const App = () => {
  const [state, setState] = React.useState({});
  React.useEffect(() => {
    chrome.storage.sync.get((items) => {
      setState(items[ACTIONS.FRAME]);
    });
  }, []);

  return <div>{JSON.stringify(state, null, 4)}</div>;
};

export default App;
