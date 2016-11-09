import React, { Component } from 'react'
import {createStore, applyMiddleware, compose , combineReducers} from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import { Provider } from 'react-redux'
import { Navigator, AsyncStorage } from 'react-native'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

import HomeContainer from '../containers/HomeContainer'
import SpellsContainer from '../containers/SpellsContainer'
import Spell from '../components/Spell'

// import reducers from '../reducers'
import characters from '../reducers/characters'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://5espellbook.com/graphql' }),
})

const apollo = client.reducer()

// FIXME Should be in reducers/index

const reducers = combineReducers({
  characters,
  apollo
})

const enhancers = compose(
  applyMiddleware(client.middleware()),
  autoRehydrate(),
  global.reduxNativeDevTools ?
        global.reduxNativeDevTools() :
        x => x
)

const store = createStore(reducers, undefined, enhancers)
const persistor = persistStore(store, {blacklist: [apollo],storage: AsyncStorage})

export default React.createClass({
  navigatorRenderScene (route, navigator) {
    switch(route.name) {
      case 'home':
        return <HomeContainer
                onCharacterPress={
                  (character) => {
                  navigator.push({
                      name: 'character',
                      character: character}
                    )}} />
      case 'character':
        return <SpellsContainer
                character={route.character}
                onSpellPress={
                  (spellName) => {
                  navigator.push({
                      name: 'spell',
                      spellName: spellName}
                    )}}
                onBack={() => navigator.pop()} />
      case 'spell':
        return <Spell
                  onBack={() => navigator.pop()} />
      default:
        return <HomeContainer onCharacterPress={(character) => {
          navigator.push({
              name: 'character',
              character: character}
            )}} />
    }
  },
  render() {
    return (
      <ApolloProvider store={store} client={client} persistor={persistor}>
          <Navigator
            initialRoute={{ name: 'home' }}
            renderScene={this.navigatorRenderScene}
          />
      </ApolloProvider>
    )
  }
})
