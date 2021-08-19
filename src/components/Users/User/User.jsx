import s from './User.module.css'
import userPhoto from '../../../assets/images/user.png'
import { NavLink } from 'react-router-dom'

const User = ({ user, ...props }) => {
  return (
    <div>
      <div>
        <div>
          <div>
            <NavLink to={'/profile/' + user.id}>
              <img className={s.userPhoto} src={user.photos.small != null ? user.photos.small : userPhoto} alt='user' />
            </NavLink>
          </div>
          <div className='button_follow'>
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

        <div className='info'>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </div>
        <div className='location'>
          <div>{'user.location.country'}</div>
          <div>{'user.location.city'}</div>
        </div>
      </div>
    </div>
  )
}

export default User
