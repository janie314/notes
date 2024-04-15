import {
  FluentProvider,
  makeStyles,
  shorthands,
  tokens,
  webLightTheme,
} from "@fluentui/react-components";
import "./App.css";
import { BigGrid } from "./BigGrid/BigGrid";
import { Corolla } from "corolla_api";
import { useEffect, useState } from "react";

interface Note {
  id: number;
  note: string;
}

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
  const corolla = new Corolla("", "/api");
  const get_notes = corolla.make_read_query<{}, Note>("notes");
  const [notes, setNotes] = useState<Note[]>([]);
  useEffect(() => {
    get_notes({}).then((res) => {
      if (res !== null) {
        setNotes(res);
      }
    });
  });
  return (
    <>
      <FluentProvider className={styles.provider} theme={webLightTheme}>
        <div id="app">
          <BigGrid notes={notes}></BigGrid>
        </div>
      </FluentProvider>
    </>
  );
}

export default App;
export type { Note };
