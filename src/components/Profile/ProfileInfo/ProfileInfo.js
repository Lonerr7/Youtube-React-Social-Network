import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';
import ProfileImage from './ProfileImage/ProfileImage';
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';

const ProfileInfo = (props) => {
  return (
    <div>
      <ProfileImage />
      <div className={s.descriptionBlock}>
        {!props.userProfile ? (
          <Preloader />
        ) : (
          <div className={s.profileInfoBox}>
            <ProfileAvatar userProfile={props.userProfile} isOwner={props.isOwner} uploadProfilePhoto={props.uploadProfilePhoto} />
            <ProfileStatusWithHooks {...props} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
