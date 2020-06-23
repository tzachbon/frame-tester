import ChromeListener from "../utils/chrome.util";
import { appendFrame, removeFrame } from "./frame";
import { ACTIONS } from "../models/frame-tester";

window.addEventListener("load", init, false);

function init() {
  const eventChromeListener = new ChromeListener();
  
  eventChromeListener.on<boolean>(ACTIONS.ACTIVE, (isActive) => {

    if (isActive) {
      appendFrame();
    } else {
      removeFrame();
    }
  });
}
