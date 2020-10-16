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
// style
import { makeStyles, ThemeProvider, createMuiTheme } from "@material-ui/core";
import { green, orange } from "@material-ui/core/colors";
// font
import "fontsource-roboto";
import Typography from "@material-ui/core/Typography";
// layout
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 15,
    },
  },
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: orange[400],
    },
  },
});

const useStyle = makeStyles({
  root: {
    background: `linear-gradient(45deg, #333,#999)`,
    border: 0,
    borderRadius: 15,
    color: "white",
    padding: "30px 30px",
    marginBottom: 10,
  },
});

const ButtonStyles = () => {
  const classes = useStyle();

  return <Button className={classes.root}>Styled button</Button>;
};

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
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <div className="App">
          <header className="App-header">
            <AppBar>
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">Menu</Typography>
                <Button>Login</Button>
              </Toolbar>
            </AppBar>

            <Typography variant="h2">Welcome to MUI</Typography>
            <Typography variant="subtitle1">Learn how to use MUI</Typography>
            <ButtonStyles />

            <Grid container spacing={4} justify="center">
              <Grid item xs={12} sm={6}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
              <Grid item xs={3}>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
              <Grid item xs={3}>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
            </Grid>

            <TextField
              variant="outlined"
              color="secondary"
              type="email"
              label="Time"
              placeholder="placeholder..."
              value="test@mail.com"
            />
            <CheckBoxExample />
            <ButtonGroup variant="contained" color="primary">
              <Button startIcon={<SaveIcon />}>Save</Button>
              <Button color="secondary" startIcon={<DeleteIcon />}>
                Discard
              </Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>{" "}
      </Container>
    </ThemeProvider>
  );
}

export default App;
