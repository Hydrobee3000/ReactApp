import s from './User.module.css'
import userPhoto from '../../../assets/images/user.png'
import { NavLink } from 'react-router-dom'

const User = ({ user, ...props }) => {
  return (
    <div className={s.user}>
      <div className={s.imageContainer}>
        <NavLink to={'/profile/' + user.id}>
          <img className={s.userPhoto} src={user.photos.small != null ? user.photos.small : userPhoto} alt='user' />
        </NavLink>
      </div>
      <div className={s.userInfo}>
        <div className={s.name}>{user.name}</div>
        <div className={s.status}>{user.status}</div>
      </div>
      <div className={s.buttonFollow}>
        {user.followed ? (
          <button
            disabled={props.followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              props.unfollow(user.id)
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            disabled={props.followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              props.follow(user.id)
            }}
          >
            Follow
          </button>
        )}
      </div>
    </div>
  )
}

export default User
