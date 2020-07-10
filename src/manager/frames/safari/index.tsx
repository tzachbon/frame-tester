import * as React from "react";
import { FrameProps } from "../../../models/frame";
import  SafariTop  from "./SafariTop/index";
import  SafariBottom  from "./SafariBottom/index";
// import SafariFrame from "manager/components/App/frames/SafariFrame";

const Safari: React.FC<FrameProps> = ({ url, Iframe, frame }) => {
  return (
    <div>
      <SafariTop />
      <Iframe />
      <SafariBottom />
    </div>
  );
};

export default Safari;
