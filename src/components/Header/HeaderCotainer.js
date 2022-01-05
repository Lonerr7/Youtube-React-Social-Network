import { useEffect } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthUserData, logout } from "../../redux/authReducer";

const HeaderContainer = (props) => {
  useEffect(() => {
    props.getAuthUserData();
  }, []);

  const onLogOut = () => {
    props.logout();
  }

  return <Header {...props} onLogOut={onLogOut} />;
};

const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  };
};

const dispatchToProps = { getAuthUserData, logout };

export default connect(mapStateToProps, dispatchToProps)(HeaderContainer);
