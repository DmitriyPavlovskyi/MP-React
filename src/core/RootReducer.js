import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import todos from '../features/shared/todos/toDoReducer';
import filters from '../features/Filters/reducer';

const todoApp = combineReducers({
  todos,
  filters,
  form: formReducer
});

export default todoApp;
