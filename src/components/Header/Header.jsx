import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { SwipeableDrawer } from '@material-ui/core'
import { useState } from 'react'
import Navbar from './../Navbar/Navbar'

const Header = (props) => {
  const [anchor, setAnchor] = useState(null)
  const open = Boolean(anchor)
  const handleMenu = (event) => {
    setAnchor(event.currentTarget)
  }

  const [menuBar, setMenuBar] = useState(false)

  const toggleDrawer = (isOpenBar) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setMenuBar(isOpenBar)
  }

  return (
    <header>
      <AppBar className={s.header} position='static'>
        <Toolbar>
          <IconButton onClick={toggleDrawer(true)} edge='start' color='inherit' aria-label='open drawer'>
            <MenuIcon />
          </IconButton>

          <SwipeableDrawer open={menuBar} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
            <Navbar onClose={toggleDrawer} />
          </SwipeableDrawer>

          <Typography variant='h6' className={s.title}>
            HydroBee
          </Typography>

          <div className={s.login__block}>
            <IconButton
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenu}
              color='inherit'>
              <AccountCircle />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchor}
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
              onClose={() => {
                setAnchor(null)
              }}>
              {props.isAuth ? (
                <>
                  <NavLink to='/profile'>
                    <MenuItem
                      onClick={() => {
                        setAnchor(null)
                      }}>
                      Profile
                    </MenuItem>
                  </NavLink>
                  <MenuItem onClick={props.logout}>Log out</MenuItem>
                </>
              ) : (
                <>
                  <NavLink to={'/login'}>
                    <MenuItem
                      onClick={() => {
                        setAnchor(null)
                      }}>
                      Login
                    </MenuItem>
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
