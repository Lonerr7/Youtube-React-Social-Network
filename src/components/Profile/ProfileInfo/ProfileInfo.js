import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import tick from "../../../images/tick.png";
import cross from "../../../images/cross.png";
import userPhoto from "../../../images/avatar.jpg";

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt="pictur"
          className={s.content__image}
        />
      </div>
      <div className={s.descriptionBlock}>
        {!props.userProfile ? (
          <Preloader />
        ) : (
          <div className={s.profileInfoBox}>
            <div className={s.avatarBox}>
              {!props.userProfile.photos.large ? (
                <img className={s.avatar} src={userPhoto} alt="avatar" />
              ) : (
                <img
                  className={s.avatar}
                  src={props.userProfile.photos.large}
                  alt="avatar"
                />
              )}
            </div>

            <p className={s.fullName}>{props.userProfile.fullName}</p>
            <div className={s.jobContainer}>
              <div className={s.jobStatusContainer}>
                <p className={s.jobStatus}>Looking for a job</p>
                {props.userProfile.lookingForAJob ? (
                  <img className={s.jobStatusImg} src={tick} alt="tick" />
                ) : (
                  <img className={s.jobStatusImg} src={cross} alt="cross" />
                )}
              </div>
              <div className={s.jobDescriptionContainer}>
                <p className="jobDescription">Job description:</p>
                {props.userProfile.lookingForAJobDescription ? (
                  <p className="jobDescriptionText">
                    {props.userProfile.lookingForAJobDescription}
                  </p>
                ) : (
                  <p className="jobDescriptionText">No job description</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
