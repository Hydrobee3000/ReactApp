import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
import Button from '@material-ui/core/Button'
import { buttonStyle } from '../common/styles/buttonStyle'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

// const Header = (props) => {
//   return (
//     <header className={s.header}>
//       <img
//         className={s.image}
//         src='https://api.freelogodesign.org/files/23bfe68f1fd34f8cb61c1be389f9a975/thumb/logo_200x200.png?v=0'
//         alt='logo'
//       />

//       <div className={s.authorization__block}>
//         {props.isAuth ? (
//           <div className={s.login__block}>
//             <div className={s.login__text}>{props.login} </div>
//             <div>
//               <Button style={buttonStyle} className={s.auth__button} color='inherit' onClick={props.logout}>
//                 Log out
//               </Button>
//             </div>
//           </div>
//         ) : (
//           <div className={s.logout__block}>
//             <NavLink to={'/login'}>
//               <Button style={buttonStyle} className={s.auth__button} color='inherit'>
//                 <h3>Login</h3>
//               </Button>
//             </NavLink>
//           </div>
//         )}
//       </div>
//     </header>
//   )
// }

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const Header = (props) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <header className={s.header}>
      <div className={classes.root}>
        <FormGroup></FormGroup>
        <AppBar position='static'>
          <Toolbar>
            <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' className={classes.title}>
              HydroBee
            </Typography>
            {props.isAuth ? (
              <div>
                <IconButton
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleMenu}
                  color='inherit'
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id='menu-appbar'
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={props.logout}>Log out</MenuItem>
                </Menu>
              </div>
            ) : (
              <div className={s.logout__block}>
                <NavLink to={'/login'}>
                  <Button style={buttonStyle} className={s.auth__button} color='inherit'>
                    <h3>Login</h3>
                  </Button>
                </NavLink>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    </header>
  )
}

export default Header
