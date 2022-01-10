import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import TextError from './TextError/TextError';
import s from './Login.module.css';

const LoginForm = ({onFormSubmit}) => {
  const initialValues = {
    email: '',
    password: '',
    rememberMe: false,
  };

  const validationSchema = yup.object({
    email: yup.string().email('Invalid email format').required('Required'),
    password: yup.string().required('Required'),
  });

  return (
    <Formik
      onSubmit={onFormSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ status }) => (
        <Form>
          <div className="form-control">
            <Field type="text" placeholder="Email" name="email" id="email" />
            <ErrorMessage name="email" component={TextError} />
          </div>
          <div className="form-control">
            <Field type="password" placeholder="Password" name="password" />
            <ErrorMessage name="password" component={TextError} />
          </div>
          <div className="form-control">
            <Field type="checkbox" name="rememberMe" />
            <label htmlFor="checkbox">remember me</label>
          </div>
          <button type="submit">Log in</button>
          <p className={s.errorStatus}>{status}</p>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
