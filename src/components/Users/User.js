import { NavLink } from 'react-router-dom';
import s from './Users.module.css';
import userPhoto from './../../images/avatar.jpg';

const User = ({user, followingInProgress, unfollowThunk, followThunk}) => {
  const u = user;
  return (
    <div>
      <div className="item" >
        <div className="avatar_btn_container">
          <NavLink to={`/profile/${u.id}`}>
            <img
              className={s.avatar}
              src={u.photos.small != null ? u.photos.small : userPhoto}
              alt="avatar"
            />
          </NavLink>
          <div className="follow_btn__container">
            {u.followed ? (
              <button
                disabled={followingInProgress.includes(u.id)}
                onClick={() => {
                  unfollowThunk(u.id);
                }}
                className={s.followBtn}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={followingInProgress.includes(u.id)}
                onClick={() => {
                  followThunk(u.id);
                }}
                className={s.followBtn}
              >
                Follow
              </button>
            )}
          </div>
        </div>
        <div className="item-info">
          <div className="name_status_container">
            <p className="name">{u.name}</p>
            <p className="status">{u.status}</p>
          </div>
          <div className="location_container">
            <p className="country">{'u.location.country'}</p>
            <p className="city">{'u.location.city'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
