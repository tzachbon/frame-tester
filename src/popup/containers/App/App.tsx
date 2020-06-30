import { observer } from "mobx-react";
import * as React from "react";
import { FRAMES } from "../../../models/frame";
import { setFrame } from "../../../utils/manager/frame";
import * as styles from "./style.scss";

const getBackgroundImage = () =>
  chrome.extension.getURL("assets/images/popup-background.png");

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [currentFrame, setCurrentFrame] = React.useState<string>(FRAMES.SAFARI);
  const bgImage = React.useMemo(() => getBackgroundImage(), []);

  const handleSubmit = () => {
    if (
      Object.values(FRAMES)
        .map((frame) => frame.toLowerCase())
        .includes(currentFrame.toLowerCase())
    ) {
      setFrame(currentFrame);
    } else {
      alert('Frame not found')
    }
  };

  const handleChange = ({ target: { value } }) => setCurrentFrame(value);

  return (
    <div
      className={styles.popupContainer}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className='background-dots-layer'></div>
      <h1>Frame Tester</h1>
      <br />
      <div className='search-bar'>
        <input type='text' value={currentFrame} onChange={handleChange} />
        <button onClick={handleSubmit}>Show</button>
      </div>
    </div>
  );
};

export default observer(App);
