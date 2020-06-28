import * as React from "react";
import { ACTIONS, FRAMES } from "../../../models/frame";
import { useChromeListener } from "../../../utils/react/use-chrome";
import Switch from "./components/Switch";
import SearchBar from "./components/SearchBar";
import * as styles from "./style.scss";
import { observer } from "mobx-react";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [isActive, setActive] = React.useState(true);
  const [value, setValue] = React.useState('');
  const chromeListener = useChromeListener();

  React.useEffect(() => {
    chromeListener.send(ACTIONS.ACTIVE, { isActive, frame: FRAMES.SAFARI });
  }, [isActive]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.popupContainer}>
      <h1>Frame Tester</h1>
      <br />
      <Switch isActive={isActive} onChange={setActive} />
      <br />
      <SearchBar value={value} onChange={handleChange} />
    </div>
  );
};

export default observer(App);
