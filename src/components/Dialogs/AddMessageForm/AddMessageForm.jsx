import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../utils/validators/validarors'
import { Textarea } from '../../common/FormsControls/FormsControls'
import s from './../Dialogs.module.css'

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.form__message}>
        <Field
          className={s.message__field}
          component={Textarea}
          validate={[required, maxLength50]}
          placeholder='Enter your message'
          name='newMessageBody'
        />
      </div>
      <div className={s.wrapper__button}>
        <button className={s.message__button}>Send</button>
      </div>
    </form>
  )
}
export default reduxForm({ form: 'dialog-add-message-form' })(AddMessageForm)
