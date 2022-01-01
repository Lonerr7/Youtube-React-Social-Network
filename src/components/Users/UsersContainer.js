import React from "react";
import { connect } from "react-redux";
import {
  followThunk,
  unfollowThunk,
  toggleFollowingProgress,
  getUsers,
  // setCurrentPage
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersContainer extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.getUsers(this.props.currrentPage, this.props.pageLength);
    }
  }

  onChangePage = (page) => {
    this.props.getUsers(page, this.props.pageLength);
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

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    pageLength: state.usersPage.pageLength,
    totalUsersCount: state.usersPage.totalUsersCount,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

const dispatchToProps = {
  followThunk,
  unfollowThunk,
  toggleFollowingProgress,
  getUsers,
  // setCurrentPage
};

export default compose(
  connect(mapStateToProps, dispatchToProps),
  // withAuthRedirect
)(UsersContainer);
