import s from './../ProfileInfo.module.css'

const ProfileImage = () => {
  return (
    <div>
      <div>
        <img
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt="pictur"
          className={s.content__image}
        />
      </div>
    </div>
  );
};

export default ProfileImage;
