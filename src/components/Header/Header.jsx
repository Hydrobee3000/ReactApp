import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

const Header = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <header>
      <AppBar className={s.header} position='static'>
        <Toolbar>
          <IconButton edge='start' color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={s.title}>
            HydroBee
          </Typography>

          <div className={s.login__block}>
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
              {props.isAuth ? (
                <>
                  <NavLink to='/profile'>
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                  </NavLink>
                  <MenuItem onClick={props.logout}>Log out</MenuItem>
                </>
              ) : (
                <>
                  <NavLink to={'/login'}>
                    <MenuItem onClick={handleClose}>Login</MenuItem>
                  </NavLink>
                </>
              )}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default Header
