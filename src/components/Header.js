import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img
        className={s.header__logo}
        src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Steam_Logo.png"
        alt="logo"
      />
    </header>
  );
};

export default Header;
