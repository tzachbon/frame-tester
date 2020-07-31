import { FRAMES, FramesMap } from ".";
import Safari from "../../manager/frames/Safari";
import Facebook from "../../manager/frames/Facebook";
import { SafariState } from "../../manager/frames/Safari/types";

export const FRAMES_MAP: FramesMap = {
  [FRAMES.SAFARI]: {
    name: "Safari Dark",
    component: Safari,
    states: SafariState,
  },
  [FRAMES.FACEBOOK]: {
    name: "Facebook Dark",
    component: Facebook,
  },
};
