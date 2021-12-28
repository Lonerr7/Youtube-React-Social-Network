import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile } from "../../redux/profileReducer";
import * as axios from "axios";
import { useMatch } from "react-router-dom";

const ProfileContainer = (props) => {
  const match = useMatch("/profile/:userId");
  console.log(match);
  let userId = match ? match.params.userId : "2";

  useEffect(() => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        props.setUserProfile(response.data);
      });

    return () => {
      console.log(`Unmount`);
    };
  }, [userId]);

  return <Profile {...props} />;
};

const mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
  };
};

const dispatchToProps = { setUserProfile };

export default connect(mapStateToProps, dispatchToProps)(ProfileContainer);
