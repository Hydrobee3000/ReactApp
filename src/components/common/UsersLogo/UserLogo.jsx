import userPhoto from '../../../assets/images/user.png'
import s from './UserLogo.module.css'

const UserLogo = (src = userPhoto) => {
  return <img className={s.user__logo} src={src} alt='user logo' />
}

export default UserLogo
