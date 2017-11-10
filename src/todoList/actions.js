import {DELETE_TODO, TOGGLE_TODO, UPDATE_TODO, TOGGLE_COMPLETED} from './constants';

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id
  };
};

export const updateTodo = (id, data) => {
  return {
    type: UPDATE_TODO,
    payload: {
      id, data
    }
  };
};

export const toggleCompleted = (id) => {
  return {
    type: TOGGLE_COMPLETED,
    payload: id
  };
};
