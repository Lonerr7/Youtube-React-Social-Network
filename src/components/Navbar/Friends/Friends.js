import s from './../Navbar.module.css';
import Friend from './Friend/Friend';

const Friends = (props) => {
  const friendsElements = props.friends.map(f => <Friend name={f.name} src={f.avatar} id={f.id} key={f.id} />);

  return (
    <div className={s.friends}>
      <h4 className={s.friends__title}>Friends</h4>
      <div className={s.friends__box}>
      {friendsElements}
      </div>
    </div>
  );
};

export default Friends;