import React from 'react'
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native'

import styles from '../styles.js'

export default React.createClass({
  props: {
    spell: React.PropTypes.array.isRequired,
    onBack: React.PropTypes.func.isRequired
  },
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Spell name here
          </Text>
          <TouchableHighlight onPress={this.props.onBack}>
            <Text>Back</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.listContainer}>
          <Text>This is where the spell description will be</Text>
        </View>
      </View>
    )
  }
})
