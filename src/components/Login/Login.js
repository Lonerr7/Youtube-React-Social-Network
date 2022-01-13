import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { login, getCaptchaURL } from '../../redux/authReducer';
import { Navigate } from 'react-router-dom';

const Login = ({ login, isAuth, getCaptchaURL, captcha }) => {
  const onFormSubmit = (formData, { resetForm, setSubmitting, setStatus }) => {
    login(formData, setStatus);
    // resetForm();
    setSubmitting(false);
  };

  if (isAuth) return <Navigate to="/profile" />;

  return (
    <div>
      <h1>Log in</h1>
      <LoginForm onFormSubmit={onFormSubmit} captcha={captcha} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captcha: state.auth.captcha,
});

const dispatchToProps = { login, getCaptchaURL };

export default connect(mapStateToProps, dispatchToProps)(Login);
