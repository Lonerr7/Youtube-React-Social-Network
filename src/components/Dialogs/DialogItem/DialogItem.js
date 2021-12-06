import { NavLink } from "react-router-dom";

import s from './../Dialogs.module.css';

const DialogItem = (props) => {
  const path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog + " " + s.active}>
      <img className={s.avatar} src={props.source} alt="avatar" />
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;