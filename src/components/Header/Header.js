import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

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
          <div className={s.loginInfoBox}>
            <p className={s.userName}>{props.login}</p>
            <button className={s.logoutBtn} onClick={props.onLogOut} >Log out</button>
          </div>
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
