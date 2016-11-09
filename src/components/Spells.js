import React from 'react'
import {
  TouchableHighlight,
  TextInput,
  View,
  ScrollView,
  Text,
} from 'react-native'

import SpellListContainer from '../containers/SpellListContainer'

import styles from '../styles.js'

export default React.createClass({
  props: {
    character: React.PropTypes.object.isRequired,
    onAddSpell: React.PropTypes.func.isRequired,
    onBack: React.PropTypes.func.isRequired
  },
  getInitialState () {
    return {
      name: ""
    }
  },
  addSpell () {
    this.props.onAddSpell(this.props.character.name, this.state.name)
    this.setState({name: ""})
  },
  render () {
      return (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              {this.props.character.name}'s Spellbook
            </Text>
            <TouchableHighlight onPress={this.props.onBack}>
              <Text>Back</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.listContainer}>
            <SpellListContainer character={this.props.character} />
          </View>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(name) => this.setState({name})}
            autoCorrect={false}
            value={this.state.name}/>
          <TouchableHighlight
            underlayColor='red'
            style={styles.add}
            onPress={() => this.addSpell()} >
            <View>
              <Text>
                Add a spell
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      )
    }
})
