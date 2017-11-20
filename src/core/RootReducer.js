import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import todos from '../features/shared/todos/toDoReducer';
import filters from '../features/Filters/reducer';
import account from '../features/testForm/account';

const todoApp = combineReducers({
  todos,
  filters,
  account,
  form: formReducer
});

export default todoApp;
