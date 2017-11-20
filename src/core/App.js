import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootReducer from './RootReducer';
import CreateTodo from '../features/CreateTodo/CreateTodo';
import TodoList from '../features/TodoList/TodoList';
import Filters from '../features/Filters/Filters';
import './App.css';

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
