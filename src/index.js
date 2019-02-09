import React from "react";
import ReactDOM from "react-dom";
import AppHeader from "./app";
import "./styles.css";
import { createStore } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import reducers from "./reducers";
import theme from './theme'

const store = createStore(reducers);
const muiTheme = createMuiTheme(theme)
muiTheme.shadows[25] = '0 2px 4px 0 rgba(0,0,0,.08)'

function App() {
  return (
    <ReduxProvider store={store}>
    <MuiThemeProvider theme={muiTheme}>
      <div className="App">
        <h1>Hello User 🙂</h1>
        <AppHeader />
      </div>
    </MuiThemeProvider>
    </ReduxProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
