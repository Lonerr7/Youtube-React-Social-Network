import s from "./Users.module.css";
import userPhoto from "./../../images/avatar.jpg";

const Users = (props) => {
  const pages = [];
  const totalPages = Math.ceil(props.totalUsersCount / props.pageLength);

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => (
          <span
            className={
              props.currentPage === p
                ? `${s.currentPage} ${s.pageNumber}`
                : s.pageNumber
            }
            onClick={() => {
              props.onChangePage(p);
            }}
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      {props.users.map((u) => {
        return (
          <div className="item" key={u.id}>
            <div className="avatar_btn_container">
              <img
                className={s.avatar}
                src={u.photos.small != null ? u.photos.small : userPhoto}
                alt=""
              />
              <div className="follow_btn__container">
                {u.isFollowed ? (
                  <button
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                    className={s.followBtn}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(u.id);
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
                <p className="country">{"u.location.country"}</p>
                <p className="city">{"u.location.city"}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
