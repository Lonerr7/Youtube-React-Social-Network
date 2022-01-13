import React from 'react';

import s from '../ProfileInfo.module.css';

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
    </div>
  );
};

export default ProfileStatusWithHooks;
