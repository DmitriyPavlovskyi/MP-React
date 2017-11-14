import {todoList} from '../../../fixtures';
import {DELETE_TODO, TOGGLE_TODO, UPDATE_TODO, TOGGLE_COMPLETED, ADD_TODO} from './constants';

const initialState = {
  todoList
};

const todos = (state = initialState, action) => {
  let test = {
    ...action.payload,
    isCompleted: false,
    isSubmenuOpened: false
  };

  switch (action.type) {
  case DELETE_TODO:
    return {
      ...state,
      todoList: state.todoList.filter(item => item.id !== action.payload)
    };

  case TOGGLE_TODO:
    return {
      ...state,
      todoList: state.todoList.map(todo =>
        (todo.id === action.payload)
          ? {...todo, isOpened: !todo.isOpened}
          : todo
      )
    };

  case UPDATE_TODO:
    return {
      ...state,
      todoList: state.todoList.map(todo =>
        (todo.id === action.payload.id)
          ? {...todo, todo: action.payload.data, isOpened: false}
          : todo
      )
    };

  case TOGGLE_COMPLETED:
    return {
      ...state,
      todoList: state.todoList.map(todo =>
        (todo.id === action.payload)
          ? {...todo, isCompleted: !todo.isCompleted}
          : todo
      )
    };

  case ADD_TODO:
    return {
      ...state,
      todoList: state.todoList.concat([test])
    };

  case 'CLEAR_COMPLETED':
    return {
      ...state,
      todoList: state.todoList.filter(todo => !todo.isCompleted)
    };

  default:
    return state;
  }
};

export default todos;
