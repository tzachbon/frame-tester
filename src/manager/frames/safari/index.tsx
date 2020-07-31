import * as React from "react";
import * as styles from "./style.scss";
import { FrameProps } from "../../../models/frame";
import SafariTop from "./SafariTop/index";
import SafariBottom from "./SafariBottom/index";

const Safari: React.FC<FrameProps> = ({ url, Iframe, frame }) => {
  return (
    <div className={styles.root}>
      <SafariTop url={url} />
      <Iframe className={styles.Iframe} />
      <SafariBottom />
    </div>
  );
};

export default Safari;
