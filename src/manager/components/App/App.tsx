import * as React from "react";
import { ACTIONS, SetFramePayload } from "../../../models/frame";
import { FRAMES_MAP } from "../../../models/frame/frame-mapping";
import {
  getFrameFromStorage,
  listenToFrameChange,
  isChromeExtension,
} from "./utils";
import { getIframe } from "../Iframe/get-iframe";
import ChromeListener from "../../../utils/chrome.util";
import { ChromeActions } from "../../../utils/chrome.actions";

const App = () => {
  const [state, setState] = React.useState<SetFramePayload | null>(null);
  const [frameState, setFrameState] = React.useState(null);
  const { current: chromeListener } = React.useRef(new ChromeListener());

  const onListenToFrameChange = React.useCallback(
    (mount: boolean) =>
      listenToFrameChange(ACTIONS.FRAME, (item: SetFramePayload) => {
        if (!mount || !item) return;

        setState((currentState) => {
          const { url } = item;

          if (isChromeExtension(url) && currentState?.url) {
            item.url = currentState.url;
          }

          return item;
        });
      }),
    []
  );

  const onGetFrameFromStorage = React.useCallback((mount: boolean) => {
    getFrameFromStorage(
      ACTIONS.FRAME,
      (item: SetFramePayload) => mount && setState(item)
    );
  }, []);

  const onGetFrameState = React.useCallback(
    (mount: boolean) => {
      chromeListener.on(ChromeActions.FRAME_STATE, (...args) => {
        if (!mount) {
          return;
        }

        alert(args[0])
      });
    },
    [chromeListener]
  );

  React.useEffect(() => {
    let mount = true;

    onGetFrameFromStorage(mount);
    onListenToFrameChange(mount);
    onGetFrameState(mount);

    return () => {
      mount = false;
    };
  }, []);

  if (!state) return <h1>loading...</h1>;

  const { frame, url } = state;

  const Frame = FRAMES_MAP[frame];
  const Iframe = getIframe(url);

  return <Frame frame={frame} url={url} Iframe={Iframe} state={frameState} />;
};

export default App;
