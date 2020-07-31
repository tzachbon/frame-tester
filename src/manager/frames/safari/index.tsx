import * as React from "react";
import * as styles from "./style.scss";
import { FrameProps } from "../../../models/frame";
import SafariTop from "./SafariTop/index";
import SafariBottom from "./SafariBottom/index";
import { SafariState } from './types';

const Safari: React.FC<FrameProps<keyof typeof SafariState>> = ({ url, Iframe, state }) => {
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
