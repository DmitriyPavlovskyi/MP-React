import {todoList as defaultState} from '../../fixtures';
import {ADD_TODO, DELETE_TODO, TOGGLE_TODO, UPDATE_TODO, TOGGLE_COMPLETED} from '../constants';

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

    // Не понял как работает сортировка тут
  case TOGGLE_TODO:
    return state.map(todo =>
      (todo.id === action.payload)
        ? {...todo, isOpened: !todo.isOpened}
        : todo
    );

  case UPDATE_TODO:
    return state.map(todo =>
      (todo.id === action.payload.id)
        ? {...todo, todo: action.payload.data, isOpened: false}
        : todo
    );

  case TOGGLE_COMPLETED:
    return state.map(todo =>
      (todo.id === action.payload)
        ? {...todo, isCompleted: !todo.isCompleted}
        : todo
    );

  default:
    return state;
  }
};

export default todos;
