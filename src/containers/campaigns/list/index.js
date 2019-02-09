import { connect } from 'react-redux'
import List from '../../../campaigns/list/index';
import { bindActionCreators } from 'redux'

function mapStateToProps({ data }) {
    const { campaigns } = data
  return { 
    campaigns
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(List)