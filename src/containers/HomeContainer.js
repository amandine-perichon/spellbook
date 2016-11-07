import { connect } from 'react-redux'

import { addCharacter } from '../store/actions'
import Home from '../components/Home'

const mapDispatchToProps = (dispatch) => {
  return {
    onAddCharacter: (name) => {
      dispatch(addCharacter(name))
    }
  }
}

export default connect(null , mapDispatchToProps)(Home)
