import { observer } from 'mobx-react';
import * as React from 'react';
import { FRAMES } from '../../../models/frame';
import { setFrame } from '../../../utils/manager/frame';
import * as styles from './style.scss';

// /// <reference path='./index.d.ts'/>

// import logoImg from "../../../assets/images/white_dots01.svg";
// import bg from "../../../assets/images/popup-background.png";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [currentFrame, setCurrentFrame] = React.useState<string>('safari');

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
    <div className={styles.popupContainer}>

      <span className="background-dots-layer">
        <img className="dot01" src="https://trello-attachments.s3.amazonaws.com/5ef0eb9c4a4a7d04cd321e52/5ef0eb9cd336b8198ad3e74a/3c08a9ae3691acb77960c5f8f61b1de3/white_dots01.svg" />
        <img src="https://trello-attachments.s3.amazonaws.com/5ef0eb9c4a4a7d04cd321e52/5ef0eb9cd336b8198ad3e74a/1835e07e5e232050a62933d8d2644e1b/white_dots02-01.svg" />
        <img src="https://trello-attachments.s3.amazonaws.com/5ef0eb9c4a4a7d04cd321e52/5ef0eb9cd336b8198ad3e74a/d3e365e7cf68a76f0bb551ae99d6cc1b/white_dots03.svg" />
        <img src="https://trello-attachments.s3.amazonaws.com/5ef0eb9c4a4a7d04cd321e52/5ef0eb9cd336b8198ad3e74a/398ba0dc305abe04028ea3a95e5f01a3/white_dots04.svg" />
      </span>

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
