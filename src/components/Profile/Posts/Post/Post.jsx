import s from './Post.module.css'
import UserLogo from '../../../common/UsersLogo/UserLogo'

const Post = (props) => {
  return (
    <div className={s.post}>
      <UserLogo profile={props.profile} />
      <span className={s.postText}>{props.message}</span>
      <span className={s.like}>like: {props.likesCount}</span>
    </div>
  )
}

export default Post
