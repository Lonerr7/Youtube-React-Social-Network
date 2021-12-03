import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt="pictur"
          className={s.content__image}
        />
      </div>
      <div>ava + descr</div>
      <div>
        my posts
        <div>new post</div>
        <div className='posts'>
          <div className={s.item}>post1</div>
          <div className={s.item}>post2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
