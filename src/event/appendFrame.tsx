import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";

const rootId = `__frame-tester-root__`;

const createRoot = () => {
  const rootRef = document.createElement("div");
  rootRef.setAttribute("id", rootId);

  document.body.appendChild(rootRef);

  return rootRef;
};

export const appendFrame = () => ReactDOM.render(<App />, createRoot());
export const removeFrame = () => document.getElementById(rootId).remove();

