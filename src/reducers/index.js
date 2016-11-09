import { combineReducers } from 'redux'
import ApolloClient from 'apollo-client'

import { client } from '../containers/Spellbook'

import characters from './characters'

export default combineReducers({
  characters: characters,
  apollo: client.reducer()
})
