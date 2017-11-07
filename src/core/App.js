import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootReducer from './RootReducer';
import TodoList from '../todos/containers/TodoList';
import CreateTodo from '../todos/components/CreateTodo';

let store = createStore(RootReducer);

class App extends Component {
  static propTypes = {

  };

  render() {
    return (
      <Provider store={store}>
        <div>
          <CreateTodo />
          <TodoList />
        </div>
      </Provider>
    );
  }
}

export default App;
