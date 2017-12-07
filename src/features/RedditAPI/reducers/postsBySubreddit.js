import { INVALIDATE_SUBREDDIT, REQUEST_POSTS, RECEIVE_POSTS } from '../constants';

const initialState = {
  isFetching: false,
  didInvalidate: false,
  items: []
};
// Как можно написать оба редьюсера в одном файле и правильно их экспортировать?
function posts(state = initialState, action) {
  switch (action.type) {
  case INVALIDATE_SUBREDDIT:
    return Object.assign({}, state, {
      didInvalidate: true
    });
  case REQUEST_POSTS:
    return Object.assign({}, state, {
      isFetching: true,
      didInvalidate: false
    });
  case RECEIVE_POSTS:
    return Object.assign({}, state, {
      isFetching: false,
      didInvalidate: false,
      items: action.posts,
      lastUpdated: action.receivedAt
    });
  default:
    return state;
  }
}

const postsBySubreddit = (state = {}, action) => {
  switch (action.type) {
  case INVALIDATE_SUBREDDIT:
  case RECEIVE_POSTS:
  case REQUEST_POSTS:
    return Object.assign({}, state, {
      [action.subreddit]: posts(state[action.subreddit], action)
    });
  default:
    return state;
  }
};

export default postsBySubreddit;
