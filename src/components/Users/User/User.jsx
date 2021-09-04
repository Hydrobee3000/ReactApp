import s from './User.module.css'
import userPhoto from '../../../assets/images/user.png'
import { NavLink } from 'react-router-dom'
import { ColorButton } from '../../common/Buttons/Buttons'
import { makeStyles } from '@material-ui/core/styles'

const User = ({ user, ...props }) => {
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }))
  const classes = useStyles()

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
          <ColorButton
            variant='contained'
            color='primary'
            className={classes.margin}
            disabled={props.followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              props.unfollow(user.id)
            }}
          >
            Unfollow
          </ColorButton>
        ) : (
          <ColorButton
            variant='contained'
            color='primary'
            className={classes.margin}
            disabled={props.followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              props.follow(user.id)
            }}
          >
            Follow
          </ColorButton>
        )}
      </div>
    </div>
  )
}

export default User
