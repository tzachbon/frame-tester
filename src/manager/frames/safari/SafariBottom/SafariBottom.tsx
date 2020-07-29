import * as React from "react";
import * as styles from "../style.scss";

const Return = chrome.extension.getURL("assets/safariFrame/return.svg");
const next = chrome.extension.getURL("assets/safariFrame/next.svg");
const upload = chrome.extension.getURL("assets/safariFrame/upload.svg");
const book = chrome.extension.getURL("assets/safariFrame/book.svg");
const windows = chrome.extension.getURL("assets/safariFrame/windows.svg");

const SafariBottom = () => {
  return (
  <div className={styles.safariBottom}>
    <img src={Return} />
    <img src={next} />
    <img src={upload} />
    <img src={book} />
    <img src={windows} />
  </div>
)};

export default SafariBottom;
