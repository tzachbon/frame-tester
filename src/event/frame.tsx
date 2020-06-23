import { getAppender } from "./../models/frame/appender";
import { FRAMES_MAP } from "../models/frame/frame-mapping";
import { Frame } from "./../models/frame";

export const appendFrame = (frame: Frame, oldFrame: Frame) => {
  if (oldFrame && oldFrame !== frame) removeFrame(oldFrame);

  const appender = getAppender(document);
  const appendFrame = appender[frame];
  const frames = FRAMES_MAP[frame];

  appendFrame(frames);
};

export const removeFrame = (frame: Frame) => {
  const ids = FRAMES_MAP[frame].map(({ id }) => id);

  for (const id of ids) {
    const ref = document.getElementById(id);
    if (ref) ref.remove();
  }
};
