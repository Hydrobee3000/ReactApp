import s from './Post.module.css'
import UserLogo from '../../../common/UsersLogo/UserLogo'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'

const Post = (props) => {
  return (
    <Card className={s.post_container}>
      <CardMedia className={s.image__container} title='user'>
        <UserLogo profile={props.profile} />
      </CardMedia>
      <div className={s.details__container}>
        <CardContent>
          <div className={s.post__text}>{props.message}</div>
        </CardContent>
        <CardActions className={s.like__wrapper}>
          <div className={s.like}>like: {props.likesCount}</div>
        </CardActions>
      </div>
    </Card>
  )
}

export default Post
