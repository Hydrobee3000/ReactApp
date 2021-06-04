import c from './Profile.module.css';

const Profile = () => {
  return (
    <div className={c.content}>
      <div>
        <img
          className={c.image}
          src="https://s01.yapfiles.ru/files/2234441/244963099029212_1_yapfiles.ru_1.png"
        />
      </div>
      <div>
        <img
          className={c.logo}
          src="https://makddu.ru/wp-content/uploads/logotipi-obraztsi-kartinki-8.jpg"
        />
      </div>
      <div>
        post
        <div className={c.posts}>new post</div>
        <div className={c.item}>post 1</div>
        <div className={c.item}>post 2</div>
      </div>
    </div>
  );
};
export default Profile;
