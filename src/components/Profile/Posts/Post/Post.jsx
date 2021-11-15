import s from './Post.module.css'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded'
import { Avatar, CardHeader } from '@material-ui/core'
import IconButton from '@mui/material/IconButton'
import userPhoto from '../../../../assets/images/user.png'

const Post = (props) => {
  return (
    <Card className={s.post_container}>
      <CardHeader
        avatar={
          <Avatar
            // sx={{ bgcolor:  }}
            src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}
            aria-label='avatar'></Avatar>
        }
        // action={
        //   <IconButton aria-label='settings'>
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={props.profile.fullName}
        subheader='few moments ago'
      />

      <div className={s.details__container}>
        <CardActions className={s.post__like__wrapper}>
          <IconButton color='primary' aria-label='like' component='span'>
            <FavoriteBorderRoundedIcon className={s.like} />
          </IconButton>

          {/* <span>{props.likesCount}</span> */}
        </CardActions>
        <CardContent className={s.post__text}>{props.message}</CardContent>
      </div>
    </Card>
  )
}

export default Post
