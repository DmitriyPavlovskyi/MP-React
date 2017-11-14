import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootReducer from './RootReducer';
import CreateTodo from '../features/createTodo';
import TodoList from '../features/todoList';
import Filters from '../features/filters';

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
