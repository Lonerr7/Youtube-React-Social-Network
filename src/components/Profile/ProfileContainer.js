import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile, getUserThunk } from "../../redux/profileReducer";
import { useMatch } from "react-router-dom";

const ProfileContainer = (props) => {
  const match = useMatch("/profile/:userId");
  const userId = match ? match.params.userId : "2";

  useEffect(() => {
    props.getUserThunk(userId);
  }, [userId]);

  return <Profile {...props} />;
};

const mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
  };
};

const dispatchToProps = { setUserProfile, getUserThunk };

export default connect(mapStateToProps, dispatchToProps)(ProfileContainer);
