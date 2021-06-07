import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        className={s.logo}
        src='https://скачать-ватсап-бесплатно.рус/wp-content/uploads/2018/10/kartinka-na-avatar-dlya-devushki-9.jpg'
      />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  )
}

export default Post
