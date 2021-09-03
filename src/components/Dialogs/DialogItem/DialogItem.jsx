import { NavLink } from 'react-router-dom'
import s from './../Dialogs.module.css'

const DialogItem = (props) => {
  return (
    <div className={s.dialog__item}>
      <NavLink className={s.link} activeClassName={s.active} to={'/dialogs/' + props.id}>
        {props.name}
      </NavLink>
    </div>
  )
}

export default DialogItem
