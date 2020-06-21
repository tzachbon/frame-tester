import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./app/App";

const rootId = `__frame-tester-root__`;

export const appendFrame = () =>
  ReactDOM.render(
    <App />,
    (() => {
      const rootRef = document.createElement("div");
      rootRef.setAttribute("id", rootId);

      document.body.insertBefore(rootRef, document.body.firstChild);

      return rootRef;
    })()
  );
export const removeFrame = () => document.getElementById(rootId).remove();
