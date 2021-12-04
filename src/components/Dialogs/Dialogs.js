import { NavLink } from "react-router-dom";

import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + " " + s.active}>
          <NavLink to="/dialogs/1">Vanya</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2">Andrew</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">Dima</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/4">VaDick</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/5">Ilya</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>Hello</div>
        <div className={s.message}>Hellowowowo</div>
      </div>
    </div>
  );
};

export default Dialogs;
