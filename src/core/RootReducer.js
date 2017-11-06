import { combineReducers } from 'redux';
import todos from '../todos/Reducers/todos';

const todoApp = combineReducers({
  todos
});

export default todoApp;
