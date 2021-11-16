import { NavLink } from 'react-router-dom'
import s from './../Dialogs.module.css'
import Avatar from '@mui/material/Avatar'

const DialogItem = (props) => {
  return (
    <div className={s.dialog__item}>
      <NavLink className={s.link} activeClassName={s.active} to={'/dialogs/' + props.id}>
        <Avatar sx={{ width: 56, height: 56 }}>{props.name}</Avatar>
      </NavLink>
    </div>
  )
}

export default DialogItem
