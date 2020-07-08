import * as React from "react";
import { FrameProps } from "../../../models/frame";
// import  SafariTop  from "./SafariTop/index";
// import SafariFrame from "manager/components/App/frames/SafariFrame";

const Safari: React.FC<FrameProps> = ({ url, Iframe, frame }) => {
  return (
    <div>
      <h1>{frame}</h1>
      {/* <SafariTop /> */}
      <Iframe />
    </div>
  );
};

export default Safari;
