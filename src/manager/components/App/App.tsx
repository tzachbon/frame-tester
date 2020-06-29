import * as React from "react";
import getIframe from "../../../utils/manager/get-iframe";
import { ACTIONS, SetFramePayload } from "../../../models/frame";
import { FRAMES_MAP } from "../../../models/frame/frame-mapping";

const App = () => {
  const [state, setState] = React.useState<SetFramePayload | null>(null);

  React.useEffect(() => {
    chrome.storage.sync.get((items) => {
      setState(items[ACTIONS.FRAME]);
    });
  }, []);

  if (!state) return <h1>loading...</h1>;

  const { frame, url } = state;

  const Frame = FRAMES_MAP[frame] as any;
  const Iframe = getIframe(url);

  return <Frame frame={frame} url={url} Iframe={Iframe} />;
};

export default App;
