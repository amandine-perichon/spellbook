import { connect } from 'react-redux'

import CharacterList from '../components/CharacterList'
import { deleteCharacter } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    characters: state.characters,
    onCharacterPress: ownProps.onCharacterPress
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCharacterDelete: (name) => dispatch(deleteCharacter(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList)
