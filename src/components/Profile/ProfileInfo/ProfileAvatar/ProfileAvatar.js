import s from '../ProfileInfo.module.css';
import userPhoto from '../../../../images/avatar.jpg';

const ProfileAvatar = ({ userProfile, isOwner, uploadProfilePhoto }) => {
  const onUpdatePhoto = (e) => {
    if (e.target.files[0]) uploadProfilePhoto(e.target.files[0]);
  };

  return (
    <div className={s.avatarBox}>
      {!userProfile.photos.large ? (
        <img className={s.avatar} src={userPhoto} alt="avatar" />
      ) : (
        <img className={s.avatar} src={userProfile.photos.large} alt="avatar" />
      )}
      {isOwner ? <input type="file" onChange={onUpdatePhoto} /> : null}
    </div>
  );
};

export default ProfileAvatar;
