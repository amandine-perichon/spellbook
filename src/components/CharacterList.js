import React from 'react'
import {
  ScrollView,
  Text,
} from 'react-native'

export default React.createClass({
  props: {
    characters: React.PropTypes.array.isRequired
  },
  render () {
    return (
      <ScrollView>
        {this.props.characters.map((character, i) => <Text key={i}>{character.name}</Text>)}
      </ScrollView>
    )
  }
})
