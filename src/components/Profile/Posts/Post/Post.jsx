import s from './Post.module.css'
import UserLogo from '../../../common/UsersLogo/UserLogo'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'

const Post = (props) => {
  return (
    <Card className={s.post_container}>
      <CardMedia title='user'>
        <UserLogo profile={props.profile} />
      </CardMedia>
      <CardContent>
        <div className={s.postText}>{props.message}</div>
      </CardContent>
      <CardActions>
        <div className={s.like}>like: {props.likesCount}</div>
      </CardActions>
    </Card>
  )
}

export default Post
