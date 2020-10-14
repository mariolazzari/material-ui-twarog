import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          variant="contained"
          color="secondary"
          size="large"
          startIcon={<SaveIcon />}
        >
          Ciao mondo
        </Button>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
