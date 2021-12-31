import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  setUserProfile,
  getCurrerntUserThunk,
} from "../../redux/profileReducer";
import { Navigate, useMatch } from "react-router-dom";

const ProfileContainer = (props) => {
  const match = useMatch("/profile/:userId");
  const userId = match ? match.params.userId : "2";

  useEffect(() => {
    props.getCurrerntUserThunk(userId);
  }, [userId]);

  if (!props.isAuth) return <Navigate to="/login" />;

  return <Profile {...props} />;
};

const mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
    isAuth: state.auth.isAuth,
  };
};

const dispatchToProps = { setUserProfile, getCurrerntUserThunk };

export default connect(mapStateToProps, dispatchToProps)(ProfileContainer);
