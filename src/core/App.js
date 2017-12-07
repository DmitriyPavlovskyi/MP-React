import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import RootReducer from './RootReducer';
import CreateTodo from '../features/CreateTodo/CreateTodo';
import TodoList from '../features/TodoList/TodoList';
import Filters from '../features/Filters/Filters';
import RedditAPI from '../features/RedditAPI/RedditAPI';
import './App.css';

const loggerMiddleware = createLogger();

let store = createStore(
  RootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

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
          <RedditAPI />
        </div>
      </Provider>
    );
  }
}

export default App;
