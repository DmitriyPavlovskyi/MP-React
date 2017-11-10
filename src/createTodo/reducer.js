import {todoList as defaultState} from '../fixtures';
import {ADD_TODO} from './constants';

const todos = (state = defaultState, action) => {
  switch (action.type) {
  case ADD_TODO:debugger
    return [
      ...state,
      {
        ...action.payload,
        isCompleted: false,
        isSubmenuOpened: false
      }
    ];

  default:
    return state;
  }
};

export default todos;
