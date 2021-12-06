import { NavLink } from "react-router-dom";
import s from "./../../Navbar.module.css";

const Friend = (props) => {
  const path = "dialogs/" + props.id;
  return (
    <div className={s.friend}>
      <div className={s.avatarBox}>
        <img className={s.avatar} src={props.src} alt="avatar" />
      </div>
      {/* <p className={s.name}>{props.name}</p> */}
      <div className={s.name}>
        <NavLink  to={path}>
          {props.name}
        </NavLink>
      </div>
    </div>
  );
};

export default Friend;
