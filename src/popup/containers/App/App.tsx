import { observer } from "mobx-react";
import * as React from "react";
import { FRAMES } from "../../../models/frame";
import { setFrame } from "../../../utils/manager/frame";
import * as styles from "./style.scss";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [currentFrame, setCurrentFrame] = React.useState<string>("safari");

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

      <div className="background-dots-layer">
      
      </div>
      <h1>Frame Tester</h1>
      <br />
      <div className="search-bar">
        <input type='text' value={currentFrame} onChange={handleChange} />
        <button onClick={handleSubmit}>Show</button>
      </div>
    </div>
  );
};

export default observer(App);
