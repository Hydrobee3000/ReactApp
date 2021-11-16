import s from './../Dialogs.module.css'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>

  /*   <AppBar position='fixed' color='primary' sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <IconButton color='inherit' aria-label='open drawer'>
         <MenuIcon /> 
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color='inherit'>{/* <SearchIcon /> </IconButton>
        <IconButton color='inherit'>{/* <MoreIcon /> </IconButton>
      </Toolbar>
    </AppBar>
  */
}

export default Message
