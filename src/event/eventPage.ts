import ChromeListener from "../utils/chrome.util";
import { appendFrame, removeFrame } from "./appendFrame";
import { ACTIONS } from "../models/frame-tester";

window.addEventListener("load", init, false);

function init() {
  const eventChromeListener = new ChromeListener<string>();

  eventChromeListener.on(ACTIONS.ACTIVE, (isActive) => {
    if (isActive) {
      appendFrame();
    } else {
      removeFrame();
    }
  });
}
