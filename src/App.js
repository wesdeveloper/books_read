import React from "react";
import { Grid } from "@material-ui/core";
import Books from "./components/Books";

import "./App.css";

function App() {
  return (
    <Grid item sm={12}>
      <Books />
    </Grid>
  );
}

export default App;
