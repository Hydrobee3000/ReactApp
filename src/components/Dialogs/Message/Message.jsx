import s from './../Dialogs.module.css'
import TextField from '@mui/material/TextField'

const Message = (props) => {
  return <TextField id='outlined-name' className={s.message} value={props.message} />
}

export default Message
