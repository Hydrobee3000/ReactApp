import s from './Post.module.css'
import userPhoto from '../../../../assets/images/user.png'
import UserLogo from '../../../common/UsersLogo/UserLogo'

const Post = (props) => {
  return (
    <div className={s.post}>
      <UserLogo />
      {props.message}

      <div>
        <span className={s.like}>like: {props.likesCount}</span>
      </div>
    </div>
  )
}

export default Post
