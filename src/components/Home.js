import React, { Component } from 'react'
import {
  Text,
  TextInput,
  View,
  TouchableHighlight
} from 'react-native'

import CharacterListContainer from '../containers/CharacterListContainer'
import styles from '../styles'

export default React.createClass({
  props: {
    onAddCharacter: React.PropTypes.func.isRequired
  },
  getInitialState () {
    return {
      name: ""
    }
  },
  addCharacter () {
    this.props.onAddCharacter(this.state.name)
    this.setState({name: ""})
  },
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Spellbook
          </Text>
        </View>
        <View style={styles.charactersContainer}>
          <CharacterListContainer />
        </View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(name) => this.setState({name})}
          autoCorrect={false}
          value={this.state.name}/>
        <TouchableHighlight
            underlayColor='red'
            style={styles.add}
            onPress={() => this.state.name !== ""? this.addCharacter(): null} >
          <View>
            <Text>
              Add a character
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
})
