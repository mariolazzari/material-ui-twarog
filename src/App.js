import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// compoennts
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import CheckBox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";

// icons
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";

const CheckBoxExample = () => {
  const [checked, setChecked] = useState(true);

  return (
    <div>
      <FormControlLabel
        label="Checkbocx label"
        control={
          <CheckBox
            checked={checked}
            onChange={e => setChecked(e.target.checked)}
            color="primary"
            checkedIcon={<SaveIcon />}
            icon={<SaveIcon />}
          />
        }
      />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextField />
        <CheckBoxExample />
        <ButtonGroup variant="contained" color="primary">
          <Button startIcon={<SaveIcon />}>Save</Button>
          <Button color="secondary" startIcon={<DeleteIcon />}>
            Discard
          </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
