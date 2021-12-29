import * as axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "1fca21ab-cbeb-4da3-be6a-980233b7a0f9",
  },
});

export const usersAPI = {
  getUsers(currentPage, pageLength) {
    return axiosInstance
      .get(`users?page=${currentPage}&count=${pageLength}`)
      .then((response) => response.data);
  },
};
