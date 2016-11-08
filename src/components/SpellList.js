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
    spells: React.PropTypes.array.isRequired
  },
  render () {
    const list = this.props.spells.map((spell, i) => {
      let swipeBtns = [{
        text: 'Delete',
        backgroundColor: 'red',
        underlayColor: 'blue',
        onPress: () => {() => console.log('Delete Spell') }
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
