import ChromeListener from "../utils/chrome.util";
import { appendFrame } from './appendFrame';

window.addEventListener("load", init, false);

function init() {

  appendFrame();
  
  const eventChromeListener = new ChromeListener<string>();
  
  eventChromeListener.on("test", (value) => {
    console.log(value);
  });
}


