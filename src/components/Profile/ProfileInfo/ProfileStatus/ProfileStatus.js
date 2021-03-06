import React from 'react';

import s from '../ProfileInfo.module.css';
import tick from '../../../../images/tick.png';
import cross from '../../../../images/cross.png';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.currentStatus,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateCurrentStatus(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.target.value,
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.currentStatus !== this.props.currentStatus) {
      this.setState({
        status: this.props.currentStatus,
      });
    }
  }

  render() {
    return (
      <div>
        <div>
          {this.state.editMode ? (
            <div>
              <input
                onChange={this.onStatusChange}
                onBlur={this.deactivateEditMode}
                autoFocus={true}
                type="text"
                value={this.state.status}
              />
            </div>
          ) : (
            <div>
              <span onDoubleClick={this.activateEditMode}>
                {this.props.currentStatus ? this.props.currentStatus : '------'}
              </span>
            </div>
          )}
        </div>

        <p className={s.fullName}>{this.props.userProfile.fullName}</p>
        <div className={s.jobContainer}>
          <div className={s.jobStatusContainer}>
            <p className={s.jobStatus}>Looking for a job</p>
            {this.props.userProfile.lookingForAJob ? (
              <img className={s.jobStatusImg} src={tick} alt="tick" />
            ) : (
              <img className={s.jobStatusImg} src={cross} alt="cross" />
            )}
          </div>
          <div className={s.jobDescriptionContainer}>
            <p className="jobDescription">Job description:</p>
            {this.props.userProfile.lookingForAJobDescription ? (
              <p className="jobDescriptionText">
                {this.props.userProfile.lookingForAJobDescription}
              </p>
            ) : (
              <p className="jobDescriptionText">No job description</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileStatus;
