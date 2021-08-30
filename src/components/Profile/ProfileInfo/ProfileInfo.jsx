import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/user.png'
import ProfileStatus from './ProfileStatus/ProfileStatus'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className={s.descriptionBlock}>
      <div classname={s.imageAndName}>
        <img className={s.mainPhoto} src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} alt='' />
        <h1 className={s.name}>{props.profile.fullName}</h1>
      </div>
      <div className={s.status}>
        <h3>Status: {props.profile.aboutMe}</h3>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      </div>
    </div>
  )
}
export default ProfileInfo
