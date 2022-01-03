import * as axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '1fca21ab-cbeb-4da3-be6a-980233b7a0f9',
  },
});

export const usersAPI = {
  getUsers(currentPage, pageLength) {
    return axiosInstance
      .get(`users?page=${currentPage}&count=${pageLength}`)
      .then((response) => response.data);
  },

  followUser(userId) {
    return axiosInstance
      .post(`follow/${userId}`)
      .then((response) => response.data);
  },

  unfollowUser(userId) {
    return axiosInstance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
};

export const profileAPI = {
  getCurrentProfile(userId) {
    return axiosInstance
      .get(`profile/${userId}`)
      .then((response) => response.data);
  },

  getCurrentStatus(userId) {
    return axiosInstance.get(`profile/status/${userId}`);
  },

  updateCurrentStatus(status) {
    return axiosInstance.put(`profile/status`, { status });
  },
};

export const authApi = {
  authMe() {
    return axiosInstance.get(`auth/me`).then((response) => response.data);
  },
};
