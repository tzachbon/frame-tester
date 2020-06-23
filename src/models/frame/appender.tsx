import * as ReactDOM from "react-dom";
import { FRAMES } from ".";
import { FrameElement } from "./frame-mapping";

const rootPrefix = `__frame-tester-root__`;

const withPrefix = (id) => `${rootPrefix}${id}`;

export const getAppender = (document: Document) => ({
  [FRAMES.SAFARI]: (frameElements: FrameElement[]) => {
    const [top, bottom] = frameElements;

    const topRef = document.createElement("div");
    topRef.id = top.id;

    const bottomRef = document.createElement("div");
    bottomRef.id = bottom.id;

    document.body.insertBefore(topRef, document.body.firstChild);
    document.body.append(bottomRef);

    ReactDOM.render(top.componentEntry, topRef);
    ReactDOM.render(bottom.componentEntry, bottomRef);
  },
});
