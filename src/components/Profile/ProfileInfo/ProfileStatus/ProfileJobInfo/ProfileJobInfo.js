import tick from '../../../../../images/tick.png';
import cross from '../../../../../images/cross.png';
import s from '../../ProfileInfo.module.css';

const ProfileJobInfo = ({userProfile}) => {
  return (
    <div className={s.jobContainer}>
      <div className={s.jobStatusContainer}>
        <p className={s.jobStatus}>Looking for a job</p>
        {userProfile.lookingForAJob ? (
          <img className={s.jobStatusImg} src={tick} alt="tick" />
        ) : (
          <img className={s.jobStatusImg} src={cross} alt="cross" />
        )}
      </div>
      <div className={s.jobDescriptionContainer}>
        <p className="jobDescription">Job description:</p>
        {userProfile.lookingForAJobDescription ? (
          <p className="jobDescriptionText">
            {userProfile.lookingForAJobDescription}
          </p>
        ) : (
          <p className="jobDescriptionText">No job description</p>
        )}
      </div>
    </div>
  );
};

export default ProfileJobInfo;
