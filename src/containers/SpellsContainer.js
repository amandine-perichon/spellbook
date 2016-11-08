import { connect } from 'react-redux'

import Spells from '../components/Spells'
import { addSpell } from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    onAddSpell: (character, spellName) => dispatch(addSpell(character, spellName))
  }
}

export default connect(null, mapDispatchToProps)(Spells)
