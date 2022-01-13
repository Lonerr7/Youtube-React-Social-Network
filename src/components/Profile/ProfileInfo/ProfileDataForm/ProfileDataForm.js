import { Formik, Form, Field, ErrorMessage } from 'formik';
import TextError from '../../../Login/TextError/TextError';
// import * as yup from 'yup';
import s from './ProfileDataForm.module.css';

const ProfileDataForm = (props) => {
  const initialValues = {
    fullName: '',
    lookingForAJob: false,
    lookingForAJobDescription: '',
    aboutMe: ''
  };

  return (
    <Formik initialValues={initialValues} onSubmit={props.onFormSubmit}>
      {({ status }) => (
        <Form>
          <div className="form-control">
            <Field
              type="text"
              placeholder="Full name"
              name="fullName"
              id="fullName"
            />
            <ErrorMessage name="fullName" component={TextError} />
          </div>
          <div className="form-control">
            <Field
              type="text"
              placeholder="About Me"
              name="aboutMe"
              id="aboutMe"
            />
            <ErrorMessage name="aboutMe" component={TextError} />
          </div>
          <div className="form-control">
            <Field type="checkbox" name="lookingForAJob" />
            <label htmlFor="checkbox">Looking for a job</label>
          </div>
          <div className="form-control">
            <Field
              type="text"
              placeholder="Looking for a job description"
              name="lookingForAJobDescription"
              id="lookingForAJobDescription"
            />
            <ErrorMessage
              name="lookingForAJobDescription"
              component={TextError}
            />
          </div>
          <button type="submit">Save</button>
          <p className={s.errorStatus}>{status}</p>
          <button onClick={props.deactivateEditMode}>Exit</button>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileDataForm;
