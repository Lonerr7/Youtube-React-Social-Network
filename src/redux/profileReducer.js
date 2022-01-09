import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';

const initialState = {
  posts: [
    {
      id: 1,
      message: 'Hi, how are u?',
      likesCount: 20,
    },
    {
      id: 2,
      message: "It's my first post",
      likesCount: 15,
    },
  ],
  newPostText: '',
  userProfile: null,
  currentStatus: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.userProfile,
      };
    case SET_USER_STATUS:
      return {
        ...state,
        currentStatus: action.status,
      };
    default:
      return state;
  }
};

export const addPost = () => ({
  type: ADD_POST,
});
export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId,
});
export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const setUserProfile = (userProfile) => ({
  type: SET_USER_PROFILE,
  userProfile,
});
export const setUserStatus = (status) => ({
  type: SET_USER_STATUS,
  status,
});

export const getCurrentUserThunk = (userId) => {
  return (disptach) => {
    profileAPI.getCurrentProfile(userId).then((data) => {
      disptach(setUserProfile(data));
    });
  };
};
export const getCurrentStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getCurrentStatus(userId).then((response) => {
      dispatch(setUserStatus(response.data));
    });
  };
};
export const updateCurrentStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateCurrentStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
      }
    });
  };
};

export default profileReducer;
