import {SET_FILTER, CLEAR_COMPLETED} from './constants';

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: filter
  };
};

export const clearCompletedTodos = () => {
  return {
    type: CLEAR_COMPLETED
  };
};
