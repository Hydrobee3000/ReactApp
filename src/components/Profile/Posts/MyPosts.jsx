import { Card } from '@material-ui/core'
import AddNewPostFormRedux from './AddNewPost/AddNewPostForm'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import Typography from '@mui/material/Typography'

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post profile={props.profile} message={post.message} likesCount={post.likesCount} />
  ))

  const onAddPost = (values) => {
    props.addPost(values.newPostText)
    values.newPostText = ''
  }

  return (
    <div className={s.posts__container}>
      <Card className={s.form_post__container}>
        <Typography variant='h4' gutterBottom component='div'>
          My posts
        </Typography>
        <AddNewPostFormRedux onSubmit={onAddPost} />
      </Card>

      <div className={s.posts}>{postsElements}</div>
    </div>
  )
}

export default MyPosts
