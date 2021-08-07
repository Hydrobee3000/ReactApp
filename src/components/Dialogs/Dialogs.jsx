import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Redirect } from 'react-router-dom'
import { Field } from 'redux-form'

const Dialogs = (props) => {
  let state = props.dialogsPage

  let dialogsElements = state.dialogs.map((dialog) => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)

  let messagesElements = state.messages.map((message) => <Message message={message.message} key={message.id} />)
  let newMessageBody = state.newMessageBody

  const onSendMessageClick = () => {
    props.sendMessage()
  }

  const onNewMessageChange = (event) => {
    let body = event.target.value
    props.updateNewMessageBody(body)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <AddMessageForm />
      </div>
    </div>
  )
}

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component='textarea' name='newMessageBody' placeholder='Enter your message' />
      </div>
      <div>
        <button onClick={onSendMessageClick}>Send</button>
      </div>
    </form>
  )
}

export default Dialogs
