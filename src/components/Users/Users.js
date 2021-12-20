import React from "react";

import * as axios from "axios";
import s from "./Users.module.css";
import userPhoto from "./../../images/avatar.jpg";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageLength}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount)
      });
  }

  onChangePage = (page) => {
    this.props.setCurrentPage(page);

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageLength}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    const pages = [];
    const totalPages = Math.ceil(this.props.totalPages / this.props.pageLength);

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return (
      <div>
        <div>
          {pages.map((p) => (
            <span
              className={
                this.props.currentPage === p
                  ? `${s.currentPage} ${s.pageNumber}`
                  : s.pageNumber
              }
              onClick={() => {
                this.onChangePage(p);
              }}
              key={p}
            >
              {p}
            </span>
          ))}
        </div>
        {this.props.users.map((u) => {
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
                        this.props.unfollow(u.id);
                      }}
                      className={s.followBtn}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        this.props.follow(u.id);
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
  }
}

export default Users;
