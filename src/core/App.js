import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootReducer from './RootReducer';
import Test from '../todos/Components/Test';

let store = createStore(RootReducer);

class App extends Component {
  static propTypes = {

  };

  render() {
    return (
      <Provider store={store}>
        <div>
          <Test />
        </div>
      </Provider>
    );
  }
}

export default App;
