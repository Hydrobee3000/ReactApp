import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './Posts/MyPostsContainer'

const Profile = () => {
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  )
}
export default Profile
