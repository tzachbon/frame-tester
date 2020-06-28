import * as React from "react";
import { FRAMES } from ".";
import SafariTop from "../../manager/frames/safari/SafariTop";
import SafariBottom from "../../manager/frames/safari/SafariBottom";

export interface FrameElement {
    id: string;
    componentEntry: JSX.Element;
}

interface FramesMap {
  [key: string]: FrameElement[];
};

export const FRAMES_MAP: FramesMap = {
  [FRAMES.SAFARI]: [
    {
      id: "safari_top",
      componentEntry: <SafariTop />,
    },
    {
      id: "safari_bottom",
      componentEntry: <SafariBottom />,
    },
  ],
};
