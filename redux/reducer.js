import { combineReducers } from 'redux';

import {
  REGISTER_REJECTED,
  REGISTER_FULFILLED,
  LOG_IN_FULFILLED,
  LOG_IN_REJECTED,
  LOG_OUT,
  FETCH_USERS_COMPLETE,
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

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS_COMPLETE:
      return action.payload;
    case LOG_OUT:
      return [];
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
  users: usersReducer,
  add: addReducer,
});

export default rootReducer;
