import auth from '../api/auth';
import users from '../api/users';

// action types
export const REGISTER_SENT = 'REGISTER_SENT';
export const REGISTER_FULFILLED = 'REGISTER_FULFILLED';
export const REGISTER_REJECTED = 'REGISTER_REJECTED';
export const LOG_IN_SENT = 'LOG_IN_SENT';
export const LOG_IN_FULFILLED = 'LOG_IN_FULFILLED';
export const LOG_IN_REJECTED = 'LOG_IN_REJECTED';
export const LOG_OUT = 'LOG_OUT';

export const FETCH_USERS_SENT = 'FETCH_USERS_SENT';
export const FETCH_USERS_COMPLETE = 'FETCH_USERS_COMPLETE';

export const CLEAR_MSG = 'CLEAR_MSG';

// async action creators
export const loginUser = (username, password) => async (dispatch) => {
  dispatch({ type: LOG_IN_SENT });
  let data = await auth.login(username, password);
  if (data.err) {
    dispatch({ type: LOG_IN_REJECTED, payload: data });
  } else {
    dispatch({
      type: LOG_IN_FULFILLED,
      payload: {
        token: data.token,
        username: data.username,
        type: data.type,
      },
    });
  }
};

export const logoutUser = () => ({ type: LOG_OUT });

// admin only action creators
export const fetchAllUsers = () => async (dispatch) => {
  dispatch({ type: FETCH_USERS_SENT });
  let data = await users.fetchAll();
  console.log(data.users);
  dispatch({ type: FETCH_USERS_COMPLETE, payload: data.users });
};

export const addUser = (username, userType, password) => async (dispatch) => {
  dispatch({ type: REGISTER_SENT });
  let data = await users.register(username, userType, password);
  dispatch({ type: REGISTER_FULFILLED, payload: data });
};

export const clearAddMsg = () => ({ type: CLEAR_MSG });
