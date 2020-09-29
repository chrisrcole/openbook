import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Nav } from "./components/Nav";
import { Home } from "./components/Home";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: 85,
    maxWidth: "100vw",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <header>
        <Nav />
      </header>
      <main className={classes.main}>
        <Home />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
