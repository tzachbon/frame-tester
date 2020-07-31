import * as React from "react";
import Iframe, { IframeProps } from "./Iframe";

export const getIframe = (url: string): React.FC<IframeProps> => (
  props: IframeProps
) => <Iframe url={url} {...props} />;
