import { React } from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../utils/validators/validarors'
import { Textarea } from '../../common/FormsControls/FormsControls'
import { Paper } from '@material-ui/core'

const maxLength100 = maxLengthCreator(100)

const AddNewPostForm = (props) => {
  return (
    <form className={s.form_post} onSubmit={props.handleSubmit}>
      <div>
        <Field className={s.add__post_field} component={Textarea} name='newPostText' validate={[required, maxLength100]} />
      </div>
      <div>
        <button className={s.add__post_button}>Add post</button>
      </div>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post profile={props.profile} message={post.message} likesCount={post.likesCount} />
  ))

  const onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={s.posts__container}>
      <Paper>
        <div className={s.form_post__container}>
          <h2>My posts</h2>
          <AddNewPostFormRedux onSubmit={onAddPost} />
        </div>
      </Paper>

      <div className={s.posts}>{postsElements}</div>
    </div>
  )
}

export default MyPosts
