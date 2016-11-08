import React from 'react'
import {
  TouchableHighlight,
  View,
  ScrollView,
  Text,
} from 'react-native'

import styles from '../styles.js'

export default React.createClass({
  props: {
    characterName: React.PropTypes.string.isRequired,
    onBack: React.PropTypes.func.isRequired
  },
  render () {
      return (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              {this.props.characterName}'s Spellbook
            </Text>
            <TouchableHighlight onPress={this.props.onBack}>
              <Text>Back</Text>
            </TouchableHighlight>
          </View>
          <View>
            <Text>Spells go here</Text>
          </View>
        </View>
      )
    }
})
