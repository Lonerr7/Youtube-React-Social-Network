import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <img
          className={s.header__logo}
          src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Steam_Logo.png"
          alt="logo"
        />
        {props.isAuth ? (
         <p className={s.userName}>{props.login}</p>
        ) : (
          <NavLink className={s.loginLink} to="/login">
            LogIn
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
