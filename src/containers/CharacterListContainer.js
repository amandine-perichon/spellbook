import { connect } from 'react-redux'

import CharacterList from '../components/CharacterList'

const mapStateToProps = (state) => {
  return {
    characters: state
  }
}

export default connect(mapStateToProps)(CharacterList)
