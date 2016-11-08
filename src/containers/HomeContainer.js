import { connect } from 'react-redux'

import { addCharacter } from '../actions'
import Home from '../components/Home'

const mapStateToProps = (state, ownProps) => {
  return {
    onCharacterPress: ownProps.onCharacterPress
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddCharacter: (name) => {
      dispatch(addCharacter(name))
    }
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(Home)
