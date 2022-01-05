import { Formik, Form, Field } from 'formik';

const LoginForm = (props) => {
  const initialValues = {
    email: '',
    password: '',
    rememberMe: false,
  };

  return (
    <Formik onSubmit={props.onFormSubmit} initialValues={initialValues}>
      <Form>
        <div className="form-control">
          <Field type="text" placeholder="Email" name="email" id="email" />
        </div>
        <div className="form-control">
          <Field type="password" placeholder="Password" name="password" />
        </div>
        <div className="form-control">
          <Field type="checkbox" name="rememberMe" />
          <label htmlFor="checkbox">remember me </label>
        </div>
        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
