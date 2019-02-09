import { connect } from 'react-redux'
import history from '../../campaigns/history';

function mapStateToProps({ data }) {
    const { campaigns , selected } = data
    const campaign = campaigns[selected]
  return { 
    campaign,
    selected
  }
}


export default connect(mapStateToProps)(history)