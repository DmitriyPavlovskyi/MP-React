import { combineReducers } from 'redux';
import todos from '../features/shared/todos/toDoReducer';
import filters from '../features/filters/reducer';

const todoApp = combineReducers({
  todos,
  filters
});

export default todoApp;
