import userPhoto from '../../../assets/images/user.png'
import s from './UserLogo.module.css'

const UserLogo = (props) => {
  return <img className={s.user__logo} src={userPhoto} alt='user logo' />
}

export default UserLogo
