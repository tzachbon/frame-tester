import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./containers/App";

chrome.tabs.query({ active: true, currentWindow: true }, (tab) => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("popup")
  );
});
