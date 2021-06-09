import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const DialogItem = (props) => {
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>
        <DialogItem name='1' id='1' />
        <DialogItem name='2' id='2' />
        <DialogItem name='3' id='3' />
        <DialogItem name='4' id='4' />
        <DialogItem name='5' id='5' />
      </div>
      <div className={s.messages}>
        <Message message='hi' />
        <Message message='hello' />
        <Message message='privet' />
      </div>
    </div>
  )
}

export default Dialogs
