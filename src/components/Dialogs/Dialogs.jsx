import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Redirect } from 'react-router-dom'
import AddMessageForm from './AddMessageForm/AddMessageForm'

const Dialogs = (props) => {
  let state = props.dialogsPage

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  }

  let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id} />)
  let messagesElements = state.messages.map((m) => <Message message={m.message} key={m.id} />)
  let newMessageBody = state.newMessageBody

  if (!props.isAuth) return <Redirect to={'/login'} />

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>{dialogsElements}</div>
      <div className={s.messages}>
        <div className={s.message__item}>{messagesElements}</div>
        <div className={s.message__send_field}>
          <AddMessageForm onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  )
}

export default Dialogs
