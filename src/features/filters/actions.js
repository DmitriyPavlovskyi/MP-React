import {SET_FILTER} from './constants';

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: filter
  };
};
