import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import campaignInfo from '../../campaigns/list/campaignInfo';
import campaignInfo from '../../../campaigns/list/campaignInfo';
import { selectCampaign } from  '../../../actions/campaignActions'


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectCampaign
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(campaignInfo)