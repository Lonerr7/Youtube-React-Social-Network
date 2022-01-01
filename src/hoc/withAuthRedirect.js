import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const withAuthRedirect = (Component) => {
  const RedirectComponent = (props) => {
    if (!props.isAuth) return <Navigate to="/login" />;
    return <Component {...props} />;
  };
  
  const mapStateToProps = (state) => {
    return {
      isAuth: state.auth.isAuth,
    }
  }

  const ConnectedRedirectComponent = connect(mapStateToProps, null)(RedirectComponent);

  return ConnectedRedirectComponent;
};

export default withAuthRedirect;
