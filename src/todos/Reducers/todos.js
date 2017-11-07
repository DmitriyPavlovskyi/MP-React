import {todoList as defaultState} from '../../fixtures';
import {ADD_TODO, DELETE_TODO} from '../constants';

const todos = (state = defaultState, action) => {
  switch (action.type) {
  case ADD_TODO:
    return [
      ...state,
      {
        ...action.payload,
        isCompleted: false,
        isSubmenuOpened: false
      }
    ];

  case DELETE_TODO:
    return state.filter(item => item.id !== action.payload);
  default:
    return state;
  }
};

export default todos;
