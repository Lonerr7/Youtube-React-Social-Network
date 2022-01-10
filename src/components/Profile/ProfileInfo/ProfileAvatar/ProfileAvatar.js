import s from '../ProfileInfo.module.css';
import userPhoto from '../../../../images/avatar.jpg';

const ProfileAvatar = ({userProfile}) => {
  return (
    <div className={s.avatarBox}>
      {!userProfile.photos.large ? (
        <img className={s.avatar} src={userPhoto} alt="avatar" />
      ) : (
        <img
          className={s.avatar}
          src={userProfile.photos.large}
          alt="avatar"
        />
      )}
    </div>
  );
};

export default ProfileAvatar;
