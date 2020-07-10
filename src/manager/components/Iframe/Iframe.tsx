import * as React from "react";
import * as styles from "./style.scss";
import IframeUI from "react-iframe";
import { IIframe } from "react-iframe/types";

export interface IframeProps extends IIframe {
  containerClassName?: string;
  url: string
}

const Iframe: React.FC<IframeProps> = (props: IframeProps) => {
  const [width, setWidth] = React.useState(window.screen.width);

  React.useEffect(() => {
    let mount = true;

    window.addEventListener(
      "resize",
      () => mount && setWidth(window.screen.width)
    );

    return () => {
      mount = false;
    };
  }, []);

  return (
    <div
      className={`${styles.IframeContainer} ${props.containerClassName || ""}`}
    >
      <IframeUI
        {...props}
        className={`${styles.Iframe} ${props.className || ""}`}
        width={String(width)}
        frameBorder={0}
      />
    </div>
  );
};


export default Iframe