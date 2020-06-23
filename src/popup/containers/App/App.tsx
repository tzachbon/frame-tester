import * as React from "react";
import { ACTIONS, FRAMES } from "../../../models/frame";
import { useChromeListener } from "../../../utils/react/use-chrome";
import Switch from "./components/Switch";
import * as styles from "./style.scss";
import { observer } from "mobx-react";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [isActive, setActive] = React.useState(true);
  const chromeListener = useChromeListener();

  React.useEffect(() => {
    chromeListener.send(ACTIONS.ACTIVE, { isActive, frame: FRAMES.SAFARI });
  }, [isActive]);

  return (
    <div className={styles.popupContainer}>
      <h1>Frame Tester</h1>
      <br />
      <Switch isActive={isActive} onChange={setActive} />
    </div>
  );
};

export default observer(App);
