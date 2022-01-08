import React from 'react';

import s from '../ProfileInfo.module.css';
import tick from '../../../../images/tick.png';
import cross from '../../../../images/cross.png';
import { useState } from 'react';
import { useEffect } from 'react';

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.currentStatus);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateCurrentStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.target.value);
  };

  useEffect(() => {
    setStatus(props.currentStatus);
  }, [props.currentStatus]);

  return (
    <div>
      <div>
        {editMode ? (
          <div>
            <input
              onBlur={deactivateEditMode}
              autoFocus={true}
              type="text"
              value={status}
              onChange={onStatusChange}
            />
          </div>
        ) : (
          <div>
            <span onDoubleClick={activateEditMode}>
              {props.currentStatus ? props.currentStatus : '------'}
            </span>
          </div>
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
  );
};

export default ProfileStatusWithHooks;
