import React, { Component } from "react";
import PropTypes from "prop-types";

class TopBar extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="top-bar">
        <span>Campaign List</span>
        <button style={{ margin: "0px 15px" }}>
          <b>+ Campaign List</b>
        </button>
      </div>
    );
  }
}

export default TopBar;
