import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../utils/validators/validarors'
import { Textarea } from '../../common/FormsControls/FormsControls'
import s from './../Dialogs.module.css'

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
  return (
    <form className={s.form__message} onSubmit={props.handleSubmit}>
      <div>
        <Field
          className={s.add__message_field}
          component={Textarea}
          validate={[required, maxLength50]}
          placeholder='Enter your message'
          name='newMessageBody'
        />
      </div>
      <div className={s.wrapper__button}>
        <button className={s.add__message_button}>Send</button>
      </div>
    </form>
  )
}
export default reduxForm({ form: 'dialog-add-message-form' })(AddMessageForm)
