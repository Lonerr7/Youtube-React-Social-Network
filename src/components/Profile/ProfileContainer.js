import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  setUserProfile,
  getCurrerntUserThunk,
} from "../../redux/profileReducer";
import { useMatch } from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";

const ProfileContainer = (props) => {
  const match = useMatch("/profile/:userId");
  const userId = match ? match.params.userId : "2";

  useEffect(() => {
    props.getCurrerntUserThunk(userId);
  }, [userId]);

  return <Profile {...props} />;
};

const ProfileContainerRedirect = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
  };
};

const dispatchToProps = { setUserProfile, getCurrerntUserThunk };

export default connect(mapStateToProps, dispatchToProps)(ProfileContainerRedirect);
