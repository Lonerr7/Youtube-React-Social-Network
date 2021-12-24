import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile } from "../../redux/profileReducer";
import * as axios from "axios";

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/profile/2")
      .then((response) => {
        this.props.setUserProfile(response.data);
        console.log(response.data);
      });
    
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
  };
};

const dispatchToProps = { setUserProfile };

export default connect(mapStateToProps, dispatchToProps)(ProfileContainer);
