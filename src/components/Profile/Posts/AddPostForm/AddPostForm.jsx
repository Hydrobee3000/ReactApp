import React from 'react'
import s from '../MyPosts.module.css'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../../../common/FormsControls/FormsControls'

const AddPostForm = (props) => {
  return (
    <form className={s.form__post} onSubmit={props.handleSubmit}>
      <div>
        <Field className={s.add__post_field} component={Textarea} placeholder='Enter your message' name='postText' />
      </div>
      <div>
        <button className={s.add__message_button}>Add post</button>
      </div>
    </form>
  )
}

export default reduxForm({ form: 'profile-add-post' })(AddPostForm)
