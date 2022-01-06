import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { login } from '../../redux/authReducer';
import { Navigate } from 'react-router-dom';
import Preloader from '../common/Preloader/Preloader';

const Login = (props) => {
  const onFormSubmit = (formData, {resetForm, setSubmitting, setStatus}) => {
    props.login(formData, setStatus);
    resetForm();
    setSubmitting(false);
  };

  if (props.isAuth) return <Navigate to="/profile" />;

  return (
    <div>
      <h1>Log in</h1>
      <LoginForm onFormSubmit={onFormSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

const dispatchToProps = { login };

export default connect(mapStateToProps, dispatchToProps)(Login);
