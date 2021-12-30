import { useEffect } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { authorize } from "../../redux/authReducer";

const HeaderContainer = (props) => {
  useEffect(() => {
    props.authorize();
  }, []);

  return <Header {...props} />;
};

const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  };
};

const dispatchToProps = { authorize };

export default connect(mapStateToProps, dispatchToProps)(HeaderContainer);
