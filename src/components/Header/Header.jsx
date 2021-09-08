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
      <AppBar className={s.header} position='static' style={{ backgroundColor: '#2b7a77' }}>
        <Toolbar>
          <IconButton edge='start' className={s.menu__button} color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={s.title}>
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
    </header>
  )
}

export default Header
