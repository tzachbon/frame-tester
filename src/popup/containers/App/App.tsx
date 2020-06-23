import * as React from "react";
import { ACTIONS } from "../../../models/frame-tester";
import { useChromeListener } from "../../../utils/react/use-chrome";
import Switch from "../../components/Switch";
import * as styles from "./style.scss";
import { observer } from 'mobx-react';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [active, setActive] = React.useState(true);
  const chromeListener = useChromeListener();

  React.useEffect(() => {
    chromeListener.send(ACTIONS.ACTIVE, active);
  }, [active]);

  return (
    <div className={styles.popupContainer}>
      <h1>Frame Tester</h1>
      <br />
      <Switch isActive={active} onChange={setActive} />
    </div>
  );
};

export default observer(App);
