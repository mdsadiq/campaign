import React, { Component } from "react";
import PropTypes from "prop-types";
import TopBar from "./topBar";
import List from "../../src/containers/campaigns/list/index"
import History from "../../src/containers/campaigns/history";

class Campaigns extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <TopBar />
        <div style={{ display: "flex" }}>
          <div style={{ flex: "2", border: "1px solid #e3f2fd" }}>
            <List />
          </div>
          <div style={{ flex: "1", border: "1px solid #e3f2fd" }}>
            <History />
          </div>
        </div>
        ;
      </div>
    );
  }
}

export default Campaigns;
