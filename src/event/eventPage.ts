import ChromeListener from "../utils/chrome.util";
import { appendFrame, removeFrame } from "./frame";
import { ACTIONS, FRAMES, Frame } from "../models/frame";
import { ValuesType } from "utility-types";

window.addEventListener("load", init, false);

function init() {
  const eventChromeListener = new ChromeListener();
  let oldFrame: Frame;

  eventChromeListener.on<{
    isActive: boolean;
    frame: ValuesType<typeof FRAMES>;
  }>(ACTIONS.ACTIVE, ({ isActive, frame }) => {

    if (isActive) {
      appendFrame(frame, oldFrame);
    } else {
      removeFrame(frame);
    }

    oldFrame = frame;
  });
}
