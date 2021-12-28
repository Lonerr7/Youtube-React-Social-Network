import { useEffect } from "react";
import Header from "./Header";
import * as axios from "axios";
import { connect } from "react-redux";
import { setAuthLogin } from "../../redux/authReducer";

const HeaderContainer = (props) => {
  useEffect(() => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          const { id, login, email } = response.data.data;
          props.setAuthLogin(id, login, email);
        }
      });
  }, []);

  return <Header {...props} />;
};

const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  };
};

const dispatchToProps = { setAuthLogin };

export default connect(mapStateToProps, dispatchToProps)(HeaderContainer);
