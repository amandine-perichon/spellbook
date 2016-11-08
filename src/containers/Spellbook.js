import React, { Component } from 'react'
import {createStore, applyMiddleware, compose } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import { Provider } from 'react-redux'
import { Navigator, AsyncStorage } from 'react-native'

import HomeContainer from '../containers/HomeContainer'
import SpellsContainer from '../containers/SpellsContainer'
import reducers from '../reducers'

const enhancers = compose(
  autoRehydrate(),
  global.reduxNativeDevTools ?
        global.reduxNativeDevTools() :
        x => x
)

const store = createStore(reducers, undefined, enhancers)
const persistor = persistStore(store, {storage: AsyncStorage})

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
      <Provider store={store} persistor={persistor}>
        <Navigator
          initialRoute={{ name: 'home' }}
          renderScene={this.navigatorRenderScene}
        />
      </Provider>
    )
  }
})
