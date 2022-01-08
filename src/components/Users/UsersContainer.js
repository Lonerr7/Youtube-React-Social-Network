import React from 'react';
import { connect } from 'react-redux';
import {
  followThunk,
  unfollowThunk,
  toggleFollowingProgress,
  requestUsers,
  // setCurrentPage
} from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import {
  getUsersSuperSelector,
  getPageLength,
  getCurrentPage,
  getTotalUsersCount,
  getIsFetching,
  getFollowingInProgress,
} from '../../redux/usersSelectors';

class UsersContainer extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.requestUsers(this.props.currrentPage, this.props.pageLength);
    }
  }

  onChangePage = (page) => {
    this.props.requestUsers(page, this.props.pageLength);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageLength={this.props.pageLength}
          currentPage={this.props.currentPage}
          onChangePage={this.onChangePage}
          followThunk={this.props.followThunk}
          unfollowThunk={this.props.unfollowThunk}
          users={this.props.users}
          followingInProgress={this.props.followingInProgress}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
        />
      </>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     currentPage: state.usersPage.currentPage,
//     pageLength: state.usersPage.pageLength,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
//   };
// };

const mapStateToProps = (state) => {
  return {
    users: getUsersSuperSelector(state),
    // users: getUsers(state),
    pageLength: getPageLength(state),
    currentPage: getCurrentPage(state),
    totalUsersCount: getTotalUsersCount(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

const dispatchToProps = {
  followThunk,
  unfollowThunk,
  toggleFollowingProgress,
  requestUsers,
  // setCurrentPage
};

export default compose(
  connect(mapStateToProps, dispatchToProps)
  // withAuthRedirect
)(UsersContainer);
