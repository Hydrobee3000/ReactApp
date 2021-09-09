import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../utils/validators/validarors'
import { Textarea } from '../../common/FormsControls/FormsControls'
import s from './../Dialogs.module.css'
import { ColorButton } from '../../common/Buttons/Buttons'

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
        <ColorButton variant='contained' color='primary' className={s.add__message_button}>
          Send
        </ColorButton>
      </div>
    </form>
  )
}
export default reduxForm({ form: 'dialog-add-message-form' })(AddMessageForm)
