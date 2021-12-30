import { useEffect } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthLogin } from "../../redux/authReducer";
import { authApi } from "../../api/api";

const HeaderContainer = (props) => {
  useEffect(() => {
    authApi.authMe().then((data) => {
      if (data.resultCode === 0) {
        const { id, login, email } = data.data;
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
