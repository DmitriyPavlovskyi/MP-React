import {ADD_TODO} from './constants';
// Почему не тянет со стора тудушки ?
export const addTodo = (todo) => {debugger
  return {
    type: ADD_TODO,
    payload: todo
  };
};
