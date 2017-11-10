import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootReducer from './RootReducer';
import CreateTodo from '../createTodo';
import TodoList from '../todoList';
import Filters from '../filters';

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
          <Filters />
        </div>
      </Provider>
    );
  }
}

export default App;
