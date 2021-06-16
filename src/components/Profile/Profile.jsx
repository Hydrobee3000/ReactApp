import MyPosts from './Posts/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPosts posts={props.posts} />
    </div>
  )
}
export default Profile
