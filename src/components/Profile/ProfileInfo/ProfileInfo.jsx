import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/user.png'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className={s.descriptionBlock}>
      <img className={s.logo} src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} alt='' />
      <h1>{props.profile.fullName}</h1>
      <h3>Status: {props.profile.aboutMe}</h3>
    </div>
  )
}
export default ProfileInfo
