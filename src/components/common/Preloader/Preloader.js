import preloader from "../../../images/hug.gif";
import s from "./Preloader.module.css";

const Preloader = () => {
  return <img className={s.preloader} src={preloader} alt="preloader" />;
};

export default Preloader;
