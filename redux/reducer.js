import { combineReducers } from 'redux';

import {
  REGISTER_REJECTED,
  REGISTER_FULFILLED,
  LOG_IN_FULFILLED,
  LOG_IN_REJECTED,
  LOG_OUT,
  AUTO_LOG_IN_COMPLETE,
  SEARCH_SENT,
  SEARCH_COMPLETE,
  REMOVE_COMPLETE,
  USER_FETCH_COMPLETE,
  TRENDING_FETCH_COMPLETE,
} from './actions';

const merge = (prev, next) => Object.assign({}, prev, next);

const INITIAL_STATE = {};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOG_IN_FULFILLED:
      return merge(state, action.payload);
    case LOG_IN_REJECTED:
      return merge(state, action.payload);
    case LOG_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

const addReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_FULFILLED:
    case REGISTER_REJECTED:
      return merge(INITIAL_STATE, action.payload);
    case LOG_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  auth: authReducer,
  add: addReducer,
});

export default rootReducer;
