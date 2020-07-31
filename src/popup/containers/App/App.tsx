import { observer } from "mobx-react";
import * as React from "react";
import { FRAMES } from "../../../models/frame";
import { setFrame } from "../../../utils/manager/frame";
import * as styles from "./style.scss";
import ChromeListener from "../../../utils/chrome.util";
import { ChromeActions } from "../../../utils/chrome.actions";

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
  const [currentFrame, setCurrentFrame] = React.useState<string>(FRAMES.SAFARI);
  const { current: chromeListener } = React.useRef(new ChromeListener());
  const bgImage = getBackgroundImage();

  const handleSubmit = () => {
    if (
      Object.values(FRAMES)
        .map((frame) => frame.toLowerCase())
        .includes(currentFrame.toLowerCase())
    ) {
      setFrame(currentFrame);
    } else {
      alert("Frame not found");
    }
  };

  const handleChange = ({ target: { value } }) => setCurrentFrame(value);
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
        <input type='text' value={currentFrame} onChange={handleChange} />
        <button onClick={handleSubmit}>Show</button>
      </div>

      <button onClick={handleFrameStateUpdate}>Update State</button>

    </div>
  );
};

export default observer(App);
