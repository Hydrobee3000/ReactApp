import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className={s.descriptionBlock}>
      <img className={s.logo} src={props.profile.photos.large} alt='' />
      <h1>{props.profile.fullName}</h1>
      <h3>Status: {props.profile.aboutMe}</h3>
    </div>
  )
}
export default ProfileInfo
