import MyPosts from './Posts/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPosts />
    </div>
  )
}
export default Profile
