const SET_USER_LOGIN = "SET_USER_LOGIN";

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
        isAuth: true,
      };
    default:
      return state;
  }
};

export const setAuthLogin = (id, login, email) => ({
  type: SET_USER_LOGIN,
  data: { id, login, email },
});

export default authReducer;
