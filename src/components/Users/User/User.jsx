import s from './User.module.css'
import userPhoto from '../../../assets/images/user.png'
import { NavLink } from 'react-router-dom'

const User = ({ user, ...props }) => {
  return (
    <div className={s.user__container}>
      <div className={s.image__container}>
        <NavLink to={'/profile/' + user.id}>
          <img className={s.user__photo} src={user.photos.small != null ? user.photos.small : userPhoto} alt='user' />
        </NavLink>
      </div>
      <div className={s.user__info}>
        <div className={s.name}>{user.name}</div>
        <div className={s.status}>{user.status}</div>
      </div>
      <div className={s.button__subscribe}>
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
