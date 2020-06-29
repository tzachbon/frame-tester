import { observer } from 'mobx-react';
import * as React from 'react';
import { FRAMES } from '../../../models/frame';
import { setFrame } from '../../../utils/manager/frame';
import * as styles from './style.scss';

const getBackgroundImage = () =>
  chrome.extension.getURL("assets/images/popup-background.png") as string;

const getDotsImages = () => {
    const dots = []
    for (let i = 0; i++, i < 5;) {
      dots.push(chrome.extension.getURL(`assets/images/white_dots0${i}.svg`))
    }
     return dots;
  }


interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [currentFrame, setCurrentFrame] = React.useState<string>(FRAMES.SAFARI);
  const bgImage = React.useMemo(() => getBackgroundImage(), []);
  const dotImages = React.useMemo(() => getDotsImages(), []);

  const handleSubmit = () => {
    if (
      Object.values(FRAMES)
        .map((frame) => frame.toLowerCase())
        .includes(currentFrame.toLowerCase())
    ) {
      setFrame(currentFrame);
    }
  };

  const handleChange = ({ target: { value } }) => setCurrentFrame(value);

  return (
    <div
      className={styles.popupContainer}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.bgDotsLayer} >
        {/* {dotImages.map((image, idx) => <img className={styles.dotGroup01} src={image}  />)} */}
        <img className={styles.dotGroup01} src={dotImages[0]}  />
        <img className={styles.dotGroup02} src={dotImages[1]}  />
        <img className={styles.dotGroup03} src={dotImages[2]}  />
        <img className={styles.dotGroup04} src={dotImages[3]}  />
      </div>

      <h1>Frame Tester</h1>
      <br />
      <div className="search-bar">
        <input type="text" value={currentFrame} onChange={handleChange} />
        <button onClick={handleSubmit}>Show</button>
      </div>
    </div>
  );
};

export default observer(App);
