import React, { Component } from "react";
import PropTypes from "prop-types";
import { distanceInWordsToNow } from 'date-fns'

class CampaignInfo extends Component {
    constructor() {
        super();
    }

    selectCampaign = () => this.props.selectCampaign(this.props.id)
    render() {
        const { id, name, createdAt, isActive, campaign, selected } = this.props
        return (
            <div className="info-container" onClick={this.selectCampaign}>
                <span className="info-item">{campaign}</span>
                <div className="info-item" style={{ textAlign: 'left' }}>
                    <span>Campaign - {campaign} {name}</span><br />
                    <span style={{fontSize: 'smaller'}}> {distanceInWordsToNow(createdAt, { includeSeconds: true })}</span>
                </div>
                <span style={{marginLeft: 'auto', color: isActive ? '' : 'pink'}}>pause</span>
                <span className="info-item">comment</span>
                <span className="info-item">rename</span>
                <span className="info-item">delete</span>
            </div>
        );
    }
}

export default CampaignInfo;

CampaignInfo.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    createdAt: PropTypes.number,
    isActive: PropTypes.bool,
    campaign: PropTypes.string,
    selected: PropTypes.string,
}
