import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';
const UPLOAD_PROFILE_PHOTO = 'UPLOAD_PROFILE_PHOTO';
const UPDATE_PROFILE_INFO = 'UPDATE_PROFILE_INFO';

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
    case UPLOAD_PROFILE_PHOTO:
      return {
        ...state,
        userProfile: { ...state.userProfile, photos: action.photos },
      };
    case UPDATE_PROFILE_INFO:
      return {
        ...state,
        userProfile: { ...state.userProfile, ...action.profileInfo },
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
export const uploadProfilePhotoSuccess = (photos) => ({
  type: UPLOAD_PROFILE_PHOTO,
  photos,
});
export const updateProfileInfoSuccess = (profileInfo) => ({
  type: UPDATE_PROFILE_INFO,
  profileInfo,
});

export const getCurrentUserThunk = (userId) => async (disptach) => {
  const data = await profileAPI.getCurrentProfile(userId);
  disptach(setUserProfile(data));
};

export const getCurrentStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getCurrentStatus(userId);
  dispatch(setUserStatus(response.data));
};

export const updateCurrentStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateCurrentStatus(status);

  if (response.data.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
};

export const uploadProfilePhoto = (photo) => async (dispatch) => {
  const response = await profileAPI.uploadProfilePhoto(photo);

  if (response.data.resultCode === 0)
    dispatch(uploadProfilePhotoSuccess(response.data.data.photos));
};

export const updateProfileInfo =
  (profileInfo, setStatus) => async (dispatch) => {
    const response = await profileAPI.updateProfileInfo(profileInfo);

    if (response.data.resultCode === 0) {
      dispatch(updateProfileInfoSuccess(profileInfo));
    } else {
      setStatus(response.data.messages);
    }
  };

export default profileReducer;
