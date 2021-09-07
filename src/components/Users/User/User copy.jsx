import s from './User.module.css'
import userPhoto from '../../../assets/images/user.png'
import { NavLink } from 'react-router-dom'
import { ColorButton } from '../../common/Buttons/Buttons'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
}))

const User = ({ user, ...props }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={user.photos.small != null ? user.photos.small : userPhoto}
        title='Live from space album cover'
      />

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
    </Card>
  )
}

export default User
