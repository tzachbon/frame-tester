import { FRAMES, FramesMap } from ".";
import Safari from "../../manager/frames/Safari";
import Facebook from "../../manager/frames/Facebook";

export const FRAMES_MAP: FramesMap = {
  [FRAMES.SAFARI]: Safari,
  [FRAMES.FACEBOOK]: Facebook,
};
