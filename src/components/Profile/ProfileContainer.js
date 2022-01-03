import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {
  setUserProfile,
  getCurrentUserThunk,
  getCurrentStatus,
  updateCurrentStatus,
} from '../../redux/profileReducer';
import { useMatch } from 'react-router-dom';
// import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from 'redux';

const ProfileContainer = (props) => {
  const match = useMatch('/profile/:userId');
  const userId = match ? match.params.userId : '21512';

  useEffect(() => {
    props.getCurrentUserThunk(userId);

    props.getCurrentStatus(userId);
  }, [userId]);

  return <Profile {...props} />;
};

const mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
    currentStatus: state.profilePage.currentStatus,
  };
};

const dispatchToProps = {
  setUserProfile,
  getCurrentUserThunk,
  getCurrentStatus,
  updateCurrentStatus,
};

export default compose(
  connect(mapStateToProps, dispatchToProps)
  // withAuthRedirect
)(ProfileContainer);
