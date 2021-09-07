import s from './User.module.css'
import userPhoto from '../../../assets/images/user.png'
import { NavLink } from 'react-router-dom'
import { ColorButton } from '../../common/Buttons/Buttons'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'

const User = ({ user, ...props }) => {
  return (
    <Card className={s.user__container}>
      <CardMedia className={s.image__container} title='user profile'>
        <NavLink to={'/profile/' + user.id}>
          <img className={s.user__photo} src={user.photos.small != null ? user.photos.small : userPhoto} alt='user' />
        </NavLink>
      </CardMedia>

      <div className={s.user__info}>
        <CardContent className={s.user__details}>
          <Typography className={s.name} component='h3' variant='h3'>
            <span className={s.names}>{user.name}</span>
          </Typography>
          <Typography variant='subtitle1' color='textSecondary'>
            <div className={s.status}>{user.status}</div>
          </Typography>
        </CardContent>
      </div>
      <CardActions className={s.button__wrapper}>
        {user.followed ? (
          <ColorButton
            variant='contained'
            color='primary'
            className={s.button}
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
            className={s.button}
            disabled={props.followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              props.follow(user.id)
            }}
          >
            Follow
          </ColorButton>
        )}
      </CardActions>
    </Card>
  )
}

export default User
