import s from './Post.module.css'
import userPhoto from '../../../../assets/images/user.png'

const Post = (props) => {
  return (
    <div className={s.post}>
      <div>
        <img className={s.logo} src={userPhoto} alt='users logo' />
      </div>
      {props.message}

      <div>
        <span className={s.like}>like: {props.likesCount}</span>
      </div>
    </div>
  )
}

export default Post
