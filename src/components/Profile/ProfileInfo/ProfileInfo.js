import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';
import ProfileImage from './ProfileImage/ProfileImage';
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';
import ProfileData from './ProfileData/ProfileData';
import { useState } from 'react';
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';

const ProfileInfo = (props) => {
  const [eidtMode, setEditMode] = useState(false);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
  };

  const onFormSubmit = (formData, { resetForm, setSubmitting, setStatus }) => {
    props.updateProfileInfo(formData, setStatus);
    resetForm();
    setSubmitting(false);
    deactivateEditMode();
  };

  return (
    <div>
      <ProfileImage />
      <div className={s.descriptionBlock}>
        {!props.userProfile ? (
          <Preloader />
        ) : (
          <div className={s.profileInfoBox}>
            <ProfileAvatar
              userProfile={props.userProfile}
              isOwner={props.isOwner}
              uploadProfilePhoto={props.uploadProfilePhoto}
            />
            <ProfileStatusWithHooks {...props} />

            {eidtMode ? (
              <ProfileDataForm
                userProfile={props.userProfile}
                deactivateEditMode={deactivateEditMode}
                onFormSubmit={onFormSubmit}
              />
            ) : (
              <ProfileData
                userProfile={props.userProfile}
                isOwner={props.isOwner}
                activateEditMode={activateEditMode}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
