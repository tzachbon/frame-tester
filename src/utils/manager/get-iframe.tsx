import * as React from "react";
import IframeUI from "react-iframe";

export default function getIframe(url: string) {
  return (props) => <IframeUI {...props} url={url} frameBorder={0} />;
}
