import { authApi } from '../api/api';

const SET_USER_LOGIN = 'SET_USER_LOGIN';

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_LOGIN:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (id, login, email, isAuth) => ({
  type: SET_USER_LOGIN,
  data: { id, login, email, isAuth },
});

export const getAuthUserData = () => async (dispatch) => {
  const data = await authApi.authMe();

  if (data.resultCode === 0) {
    const { id, login, email } = data.data;
    dispatch(setAuthUserData(id, login, email, true));
  }
};

export const login = (formData, setStatus) => async (dispatch) => {
  const response = await authApi.login(formData);

  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    setStatus(response.data.messages);
  }
};

export const logout = () => async (dispatch) => {
  const response = await authApi.logout();

  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
