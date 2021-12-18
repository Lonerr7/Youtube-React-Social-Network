import s from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEhqp_Br4dEcGX_0YXK0bzSV7uHOV3OXPZ2g&usqp=CAU",
        isFollowed: false,
        fullName: "Vanya",
        status: "I'm a boss",
        location: { city: "Mogilev", country: "Belarus" },
      },
      {
        id: 2,
        photoUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEhqp_Br4dEcGX_0YXK0bzSV7uHOV3OXPZ2g&usqp=CAU",
        isFollowed: true,
        fullName: "Alex",
        status: "I'm a boy",
        location: { city: "Moscow", country: "Russia" },
      },
      {
        id: 3,
        photoUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEhqp_Br4dEcGX_0YXK0bzSV7uHOV3OXPZ2g&usqp=CAU",
        isFollowed: false,
        fullName: "Bob",
        status: "I'm not a boss",
        location: { city: "Berlin", country: "Germany" },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => {
        return (
          <div className="item" key={u.id}>
            <div className="avatar_btn_container">
              <img className={s.avatar} src={u.photoUrl} alt="" />
              <div className="follow_btn__container">
                {u.isFollowed ? (
                  <button
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                    className="follow_btn"
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(u.id);
                    }}
                    className="follow_btn"
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
            <div className="item-info">
              <div className="name_status_container">
                <p className="name">{u.fullName}</p>
                <p className="status">{u.status}</p>
              </div>
              <div className="location_container">
                <p className="country">{u.location.country}</p>
                <p className="city">{u.location.city}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;