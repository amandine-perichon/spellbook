import React from 'react'
import {
  View,
  ScrollView,
  Text,
} from 'react-native'
import Swipeout from 'react-native-swipeout'

import styles from '../styles.js'

export default React.createClass({
  props: {
    characters: React.PropTypes.array.isRequired,
    onCharacterDelete: React.PropTypes.func.isRequired
  },
  render () {
    const list = this.props.characters.map((character, i) => {
      let swipeBtns = [{
        text: 'Delete',
        backgroundColor: 'red',
        underlayColor: 'blue',
        onPress: () => { this.props.onCharacterDelete(character.name) }
      }]
      return (
        <Swipeout
          right={swipeBtns}
          autoClose={true}
          backgroundColor= 'transparent'>
          <View style={styles.character}>
            <Text>{character.name}</Text>
          </View>
        </Swipeout>
      )
    })
    return (
      <ScrollView>
        {list}
      </ScrollView>
    )
  }
})
