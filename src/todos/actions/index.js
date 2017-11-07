import {ADD_TODO, DELETE_TODO} from '../constants';

// export const fetchDefaultData = () => {
//   return {
//     type: FETCH_DEFAULT_DATA
//   };
// };

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id
  };
};
