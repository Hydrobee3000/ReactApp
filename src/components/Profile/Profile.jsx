import MyPosts from './Posts/MyPosts'
import s from './Profile.module.css'

const Profile = () => {
  return (
    <div>
      <img
        className={s.logo}
        src='https://placepic.ru/wp-content/uploads/2018/01/art-krasivyie-kartinki-Putin-politika-1331294.jpeg'
      />
      <MyPosts />
    </div>
  )
}
export default Profile
