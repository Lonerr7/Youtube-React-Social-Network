import { NavLink } from "react-router-dom";

import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  const path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Vanya" id="1" />
        <DialogItem name="Andrew" id="2" />
        <DialogItem name="Dima" id="3" />
        <DialogItem name="VaDick" id="4" />
        <DialogItem name="Ilya" id="5" />
      </div>
      <div className={s.messages}>
        <Message message="Hi" />
        <Message message="Hello" />
        <Message message="Luv u" />
      </div>
    </div>
  );
};

export default Dialogs;
