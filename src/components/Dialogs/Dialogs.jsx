import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from '../../redux/state'

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage

  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ))

  let messagesElements = state.messages.map((message) => (
    <Message message={message.message} />
  ))
  let newMessageBody = state.newMessageBody

  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }

  const onNewMessageChange = (event) => {
    let body = event.target.value
    props.store.dispatch(updateNewMessageBodyCreator(body))
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder='Enter your message'
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
