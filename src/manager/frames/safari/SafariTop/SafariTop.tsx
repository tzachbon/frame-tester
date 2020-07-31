import * as React from "react";
import * as styles from "../style.scss";


const aa = chrome.extension.getURL("assets/safariFrame/AA.svg");
const reload = chrome.extension.getURL("assets/safariFrame/reload.svg");

interface Props {
  url: string;
}

const SafariTop: React.FC<Props> = ({ url }) => {
  return (
    <div className={styles.safariTop}>
      <div className={styles.safariTopContainer}>
        <img src={aa} className={styles.textIcon} />
        <h2>{url}</h2>
        <img src={reload} className={styles.reloadIcon} />
      </div>
    </div>
  );
};

export default SafariTop;
