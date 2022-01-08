import { createSelector } from 'reselect';

export const getUsers = (state) => state.usersPage.users;

export const getUsersSuperSelector = createSelector(getUsers, (users) => {
  return users.filter((u) => true); // по сути ничего не делает
});

export const getPageLength = (state) => state.usersPage.pageLength;

export const getCurrentPage = (state) => state.usersPage.currentPage;

export const getTotalUsersCount = (state) => state.usersPage.totalUsersCount;

export const getIsFetching = (state) => state.usersPage.isFetching;

export const getFollowingInProgress = (state) =>
  state.usersPage.followingInProgress;
