import {ADD_TODO} from '../constants';

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
