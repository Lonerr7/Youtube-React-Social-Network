import ProfileContact from '../ProfileContact/ProfileContact';
import s from './../ProfileInfo.module.css';
import ProfileJobInfo from '../ProfileJobInfo/ProfileJobInfo';

const ProfileData = (props) => {
  return (
    <div>
      {props.isOwner ? (
        <div>
          <button onClick={props.activateEditMode}>Edit</button>
        </div>
      ) : null}
      <p className={s.fullName}>{props.userProfile.fullName}</p>
      <ProfileJobInfo userProfile={props.userProfile} />
      <p className={s.contactInfo}>Contact info:</p>
      {Object.keys(props.userProfile.contacts).map((k) => (
        <ProfileContact
          contactTitle={k}
          contactValue={props.userProfile.contacts[k]}
          key={k}
        />
      ))}
    </div>
  );
};

export default ProfileData;
