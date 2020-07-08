import * as React from "react";
import { FrameProps } from "../../../models/frame";

const Safari: React.FC<FrameProps> = ({ url, Iframe, frame }) => {
  return (
    <div>
      <h1>{frame}</h1>
      <Iframe />
    </div>
  );
};

export default Safari;
