import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {
  setUserProfile,
  getCurrentUserThunk,
  getCurrentStatus,
  updateCurrentStatus,
  uploadProfilePhoto,
} from '../../redux/profileReducer';
import { useMatch } from 'react-router-dom';
// import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from 'redux';

const ProfileContainer = (props) => {
  const match = useMatch('/profile/:userId');
  const userId = match ? match.params.userId : props.myId;

  useEffect(() => {
    props.getCurrentUserThunk(userId);

    props.getCurrentStatus(userId);
  }, [userId]);

  return <Profile {...props} isOwner={userId === props.myId} />;
};

const mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
    currentStatus: state.profilePage.currentStatus,
    myId: state.auth.id,
  };
};

const dispatchToProps = {
  setUserProfile,
  getCurrentUserThunk,
  getCurrentStatus,
  updateCurrentStatus,
  uploadProfilePhoto,
};

export default compose(
  connect(mapStateToProps, dispatchToProps)
  // withAuthRedirect
)(ProfileContainer);
