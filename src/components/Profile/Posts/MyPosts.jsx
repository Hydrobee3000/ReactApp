import { React } from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../utils/validators/validarors'
import { Textarea } from '../../common/FormsControls/FormsControls'

const maxLength70 = maxLengthCreator(70)

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.postForm}>
        <Field component={Textarea} name='newPostText' validate={[required, maxLength70]} />
      </div>
      <div>
        <button>Add post</button>
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
    <div className={s.posts__block}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  )
}

export default MyPosts
