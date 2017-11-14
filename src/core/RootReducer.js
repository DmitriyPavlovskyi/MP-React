import { combineReducers } from 'redux';
import todos from '../features/shared/todos/toDoReducer';
import filters from '../features/Filters/reducer';

const todoApp = combineReducers({
  todos,
  filters
});

export default todoApp;
