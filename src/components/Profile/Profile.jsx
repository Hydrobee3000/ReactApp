import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './Posts/MyPostsContainer'
import Preloader from './../common/Preloader/Preloader'

const Profile = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div className={s.profile}>
      <ProfileInfo
        isOwner={props.isOwner}
        savePhoto={props.savePhoto}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer users={props.users} profile={props.profile} />
    </div>
  )
}
export default Profile
