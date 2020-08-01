import { observer } from "mobx-react";
import * as React from "react";
import { Frame } from "../../../models/frame";
import { FRAMES_MAP } from "../../../models/frame/frame-mapping";
import { ChromeActions } from "../../../utils/chrome.actions";
import ChromeListener from "../../../utils/chrome.util";
import { setFrame } from "../../../utils/manager/frame";
import * as styles from "./style.scss";

const getBackgroundImage = () =>
  chrome.extension.getURL("assets/images/popup-background.png") as string;

const getDotsImages = () => {
  const dots = [];
  for (let i = 0; i++, i < 5; ) {
    dots.push(chrome.extension.getURL(`assets/images/white_dots0${i}.svg`));
  }
  return dots;
};

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [inputValue, setInputValue] = React.useState("");
  const { current: chromeListener } = React.useRef(new ChromeListener());
  const bgImage = getBackgroundImage();
  const dotImages = getDotsImages();

  const handleSubmit = () => {
    const frame = Object.entries(FRAMES_MAP).find(([, mappedFrame]) =>
      mappedFrame.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    if (frame) {
      const [frameId] = frame;
      setFrame(frameId as Frame);
    } else {
      alert("Frame not found");
    }
  };

  const handleChange = ({ target: { value } }) => setInputValue(value);
  const handleFrameStateUpdate = () => {
    chromeListener.send(ChromeActions.FRAME_STATE, "state");
  };

  return (
    <div
      className={styles.popupContainer}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1>Frame Tester</h1>
      <br />
      <div className='search-bar'>
        <input type='text' value={inputValue} onChange={handleChange} />
        <button onClick={handleSubmit}>Show</button>
      </div>

      <button onClick={handleFrameStateUpdate}>Update State</button>
    </div>
  );
};

export default observer(App);
