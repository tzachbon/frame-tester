import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { ACTIONS } from "../../../models/frame-tester";
import { useChromeListener } from "../../../utils/react/use-chrome";
import Switch from "../../components/Switch";
import * as styles from "./style.scss";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    grey: {
      800: "#000000", // overrides failed
      900: "#121212", // overrides success
    },
    background: {
      paper: "#000000",
    },
    primary: {
      light: "#fff",
      main: "#09d3ac",
      dark: "#eee",
      contrastText: "#eee",
    },
    secondary: {
      main: "#40739e",
      dark: "#eee",
      light: "#fff",
      contrastText: "#eee",
    },
  },
  typography: {
    fontFamily: "Nunito Sans, Roboto, sans-serif",
    fontSize: 20,
    allVariants: {
      color: "#eee",
    },
  },
});

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [active, setActive] = React.useState(true);
  const chromeListener = useChromeListener();

  React.useEffect(() => {
    chromeListener.send(ACTIONS.ACTIVE, active);
  }, [active]);

  return (
    <MuiThemeProvider theme={theme}>
      <div className={styles.popupContainer}>
        <Typography variant='h3' className='flex-center t-center' gutterBottom>
          Frame Tester
        </Typography>
        <br />
        <Switch isActive={active} onChange={setActive} />
      </div>
    </MuiThemeProvider>
  );
};

export default App;
