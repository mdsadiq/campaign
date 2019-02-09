import React, { Component } from "react";
import PropTypes from "prop-types";

function convertText(word) {
  if (word[word.length] == 'e') return `${word}d`
  return `${word}ed`
}

class History extends Component {
  constructor() {
    super();
  }

  historyitem = (h) => {
    return (
      <div key={h._id} class="history-item">
        <div> {convertText(h.action)}</div>
        <div> by {h.author}</div>
        <div>{typeof h.context == 'string' ? h.context : (`${h.old} to ${h.new}`)} </div>
      </div>
    )
  }

  // formString = (o) => `${o.old} to ${o.new}`
  render() {
    const { campaign, selected } = this.props
    console.log(selected)
    if (!selected) {
      return (
        <div class="history">
          <div style={{ textAlign: 'center', fontSize: 'x-large' }}>History</div>
          <span style={{ textAlign: 'center', opacity: .7 }} >  Select a campaign</span>
        </div>
      )
    }
    const { history } = campaign
    console.log(history);
    return (
      <div class="history">
        <div style={{ textAlign: 'center', fontSize: 'x-large' }}>History</div>
        {history.map(h => this.historyitem(h))}
      </div>)
  }
}

export default History;
