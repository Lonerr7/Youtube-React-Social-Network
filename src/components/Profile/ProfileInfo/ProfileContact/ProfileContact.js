import s from './ProfileContact.module.css';

const ProfileContact = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.profileContactBox}>
      <p className={s.contactTitle}>{contactTitle}:</p>
      <p className={s.contactValue}>{contactValue}</p>
    </div>
  );
};

export default ProfileContact;
