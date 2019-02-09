import React, { Component } from "react";
import PropTypes from "prop-types";
import AppHeader from "./layout/appHeader.js";
import Campaigns from "./campaigns/index.js";

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <Campaigns />
      </div>
    );
  }
}

export default App;
