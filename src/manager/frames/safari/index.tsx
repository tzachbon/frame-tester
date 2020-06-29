import * as React from "react";
import { FrameProps } from "../../../models/frame";

const Safari: React.FC<FrameProps> = ({ url, Iframe, frame }) => {
  return (
    <div>
      <Iframe />
    </div>
  );
};

export default Safari;
