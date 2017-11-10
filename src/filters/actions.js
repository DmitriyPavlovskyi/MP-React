import {SET_ALL_FILTER, SET_ACTIVE_FILTER, SET_INACTIVE_FILTER} from './constants';

export const setAllFilter = () => {
  return {
    type: SET_ALL_FILTER
  };
};

export const setActiveFilter = () => {
  return {
    type: SET_ACTIVE_FILTER
  };
};

export const setInActiveFilter = () => {
  return {
    type: SET_INACTIVE_FILTER
  };
};
