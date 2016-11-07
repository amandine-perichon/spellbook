import React, { Component } from 'react'
import {createStore, applyMiddleware, compose } from 'redux'
import {Provider} from 'react-redux'

import HomeContainer from '../containers/HomeContainer'
import reducers from '../reducers'

let store = createStore(reducers, compose(
    global.reduxNativeDevTools ?
      global.reduxNativeDevTools(/*options*/) :
      noop => noop
  ))

export default React.createClass({
  render() {
    return (
      <Provider store={store}>
        <HomeContainer />
      </Provider>
    )
  }
})
