import * as React from 'react'
import * as styles from "../style.scss";


const aa = chrome.extension.getURL("assets/safariFrame/AA.svg");
const reload = chrome.extension.getURL("assets/safariFrame/reload.svg");

const SafariTop = () => {
  return (
    <div className={styles.safariTop}>
      <div>
      <input type="text" />
      <img src={aa} className={styles.aA} />
      <h2>Google.com</h2>
      <img src={reload} className={styles.reload} />
      </div>
    </div>
  )
}

export default SafariTop
