import React from 'react'
import {createStore, applyMiddleware, compose } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import { Provider } from 'react-redux'
import { AsyncStorage } from 'react-native'

import HomeContainer from '../containers/HomeContainer'
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
  render() {
    return (
      <Provider store={store} persistor={persistor}>
        <HomeContainer />
      </Provider>
    )
  }
})
