import React from 'react'
import {
  View,
  ScrollView,
  Text,
  TouchableHighlight
} from 'react-native'
import Swipeout from 'react-native-swipeout'

import styles from '../styles.js'

export default React.createClass({
  props: {
    character: React.PropTypes.array.isRequired,
    onDeleteSpell: React.PropTypes.func.isRequired
  },
  render () {
    console.log(this.props.character)
    const list = this.props.character.spells.map((spell, i) => {
      let swipeBtns = [{
        text: 'Delete',
        backgroundColor: 'red',
        underlayColor: 'blue',
        onPress: () => {
          console.log(spell)
          this.props.onDeleteSpell(this.props.character.name, spell)
        }
      }]
      return (
        <Swipeout
          right={swipeBtns}
          autoClose={true}
          backgroundColor= 'transparent'>
          <TouchableHighlight onPress={() => console.log('detailed Spell View')}>
            <View>
              <Text>{spell}</Text>
            </View>
          </TouchableHighlight>
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
