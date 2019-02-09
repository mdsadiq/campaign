import React, { Component } from "react";
import PropTypes from "prop-types";
import CampaignInfo from "../../containers/campaigns/list/campaignInfo";

class List extends Component {
  render() {
    const { campaigns, selected } = this.props;
    return (
      <div>
        {Object.entries(campaigns).map(([key, value]) => {
          return <CampaignInfo
            key={key}
            id={key}
            name={value.name}
            createdAt={value.createdAt}
            isActive={value.isActive}
            campaign={value.campaign}
            selected={selected} />
        })}
      </div>
    );
  }
}

export default List;
List.propTypes = {
  campaigns: PropTypes.object,
  selected: PropTypes.string
}
