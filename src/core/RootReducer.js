import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import todos from '../features/shared/todos/toDoReducer';
import filters from '../features/Filters/reducer';
import postsBySubreddit from '../features/RedditAPI/reducers/postsBySubreddit';
import selectedSubreddit from '../features/RedditAPI/reducers/selectedSubreddit';

const todoApp = combineReducers({
  todos,
  filters,
  form: formReducer,
  postsBySubreddit,
  selectedSubreddit
});

export default todoApp;
