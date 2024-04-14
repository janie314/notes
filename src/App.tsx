import {
  FluentProvider,
  makeStyles,
  shorthands,
  tokens,
  webLightTheme,
} from "@fluentui/react-components";
import "./App.css";
import { BigGrid } from "./BigGrid/BigGrid";

const useStyles = makeStyles({
  button: {
    marginTop: "5px",
  },
  provider: {
    ...shorthands.border("1px"),
    ...shorthands.borderRadius("5px"),
    ...shorthands.padding("5px"),
  },
  text: {
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorBrandForeground2,
    fontSize: "20px",
    ...shorthands.border("1px"),
    ...shorthands.borderRadius("5px"),
    ...shorthands.padding("5px"),
  },
});

function App() {
  const styles = useStyles();
  return (
    <>
      <FluentProvider className={styles.provider} theme={webLightTheme}>
        <div id="app">
          <BigGrid></BigGrid>
        </div>
      </FluentProvider>
    </>
  );
}

export default App;
