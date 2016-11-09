import { connect } from 'react-redux'

import SpellList from '../components/SpellList'
import { deleteSpell } from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteSpell: (character, spellName) => dispatch(deleteSpell(character, spellName))
  }
}

export default connect(null, mapDispatchToProps)(SpellList)
