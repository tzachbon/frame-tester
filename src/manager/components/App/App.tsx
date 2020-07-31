import * as React from "react";
import { ACTIONS, SetFramePayload } from "../../../models/frame";
import { FRAMES_MAP } from "../../../models/frame/frame-mapping";
import {
  getFrameFromStorage,
  listenToFrameChange,
  isChromeExtension,
} from "./utils";
import { getIframe } from '../Iframe/get-iframe';

const App = () => {
  const [state, setState] = React.useState<SetFramePayload | null>(null);

  React.useEffect(() => {
    let mount = true;
    getFrameFromStorage(
      ACTIONS.FRAME,
      (item: SetFramePayload) => mount && setState(item)
    );
    listenToFrameChange(ACTIONS.FRAME, (item: SetFramePayload) => {
      if (!mount || !item) return;

      setState((currentState) => {
        const { url } = item;

        if (isChromeExtension(url) && currentState?.url) {
          item.url = currentState.url;
        }

        return item;
      });
    });

    return () => {
      mount = false;
    };
  }, []);

  if (!state) return <h1>loading...</h1>;

  const { frame, url } = state;

  const Frame = FRAMES_MAP[frame];
  const Iframe = getIframe(url);

  return <Frame frame={frame} url={url} Iframe={Iframe} />;
};

export default App;
