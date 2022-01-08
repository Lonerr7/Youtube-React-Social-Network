import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

import userPhoto from '../../../images/avatar.jpg';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';

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
            <ProfileStatusWithHooks {...props} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
