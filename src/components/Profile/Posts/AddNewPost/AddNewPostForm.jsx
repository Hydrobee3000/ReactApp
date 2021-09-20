import { Field, reduxForm } from 'redux-form'
import { Button } from '@material-ui/core'
import { Textarea } from './../../../common/FormsControls/FormsControls'
import { required, maxLengthCreator } from './../../../../utils/validators/validarors'
import s from './../MyPosts.module.css'

const maxLength100 = maxLengthCreator(100)

const AddNewPostForm = (props) => {
  return (
    <form className={s.form_post} onSubmit={props.handleSubmit}>
      <div>
        <Field className={s.add__post_field} component={Textarea} name='newPostText' validate={[required, maxLength100]} />
      </div>
      <div>
        <Button variant='outlined' onClick={props.handleSubmit}>
          Add post
        </Button>
      </div>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)

export default AddNewPostFormRedux
