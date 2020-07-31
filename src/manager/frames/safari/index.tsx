import * as React from "react";
import * as styles from "./style.scss";
import { FrameProps, FramesStates } from "../../../models/frame";
import SafariTop from "./SafariTop/index";
import SafariBottom from "./SafariBottom/index";

const Safari: React.FC<FrameProps> = ({ url, Iframe, state }) => {
  console.log(state);

  return (
    <div className={styles.root}>
      <SafariTop url={url} />
      <Iframe className={styles.Iframe} />
      <SafariBottom />
    </div>
  );
};

export default Safari;
