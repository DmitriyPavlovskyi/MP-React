import { combineReducers } from 'redux';
import createTodo from '../createTodo/reducer';
import todoList from '../todoList/reducer';
import filters from '../filters/reducer';

const todoApp = combineReducers({
  createTodo,
  todoList,
  filters
});

export default todoApp;
