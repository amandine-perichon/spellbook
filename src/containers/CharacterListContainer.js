import { connect } from 'react-redux'

import CharacterList from '../components/CharacterList'
import { deleteCharacter } from '../actions'

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCharacterDelete: (name) => dispatch(deleteCharacter(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList)
