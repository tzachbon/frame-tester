import { Button, createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { observer } from "mobx-react";
import * as React from "react";
import { useChromeListener } from "../../../utils/react/use-chrome";
import "./Popup.scss";

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

interface AppState {}

const App: React.FC = (props: AppProps) => {
  const chromeListener = useChromeListener();

  React.useEffect(
    () =>
      chromeListener.on("test", (test) => {
        console.log(test);
      }).remove,
    []
  );

  const sendMessage = () => {
    chromeListener.send("test", "this is a test!!!");
  };

  return (
    <MuiThemeProvider theme={theme}>
      <div className='popupContainer'>
        <Typography variant='h3' className='flex-center t-center' gutterBottom>
          Hello World!
        </Typography>
        <br />
        <Button onClick={sendMessage}>Click</Button>
      </div>
    </MuiThemeProvider>
  );
};

export default observer(App);
