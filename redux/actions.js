import auth from '../api/auth';

// action types
export const REGISTER_SENT = 'REGISTER_SENT';
export const REGISTER_FULFILLED = 'REGISTER_FULFILLED';
export const REGISTER_REJECTED = 'REGISTER_REJECTED';
export const LOG_IN_SENT = 'LOG_IN_SENT';
export const LOG_IN_FULFILLED = 'LOG_IN_FULFILLED';
export const LOG_IN_REJECTED = 'LOG_IN_REJECTED';
export const LOG_OUT = 'LOG_OUT';
export const AUTO_LOG_IN_COMPLETE = 'AUTO_LOG_IN_COMPLETE';

export const SEARCH_SENT = 'SEARCH_SENT';
export const SEARCH_COMPLETE = 'SEARCH_COMPLETE';

export const FETCHING_USER = 'FETCHING_USER';
export const USER_FETCH_COMPLETE = 'USER_FETCH_COMPLETE';

export const REMOVING_FAVORITE = 'REMOVING_FAVORITE';
export const REMOVE_COMPLETE = 'REMOVE_COMPLETE';

export const FETCHING_TRENDING = 'FETCHING_TRENDING';
export const TRENDING_FETCH_COMPLETE = 'TRENDING_FETCH_COMPLETE';

// async action creators
export const loginUser = (username, password) => async (dispatch) => {
  dispatch({ type: LOG_IN_SENT });
  let data = await auth.login(username, password);
  dispatch({
    type: LOG_IN_FULFILLED,
    payload: {
      token: data.token,
      username: data.username,
      type: data.type,
    },
  });
};

// export const autoLogin = () => ({
//   type: AUTO_LOG_IN_COMPLETE,
// });

export const logoutUser = () => ({ type: LOG_OUT });