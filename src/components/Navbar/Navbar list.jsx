import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
import React from 'react'
import { useState } from 'react'
import { MenuIcon } from '@material-ui/icons/Menu'
import { SwipeableDrawer } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import EmailRoundedIcon from '@material-ui/icons/EmailRounded'
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded'
import LibraryMusicRoundedIcon from '@material-ui/icons/LibraryMusicRounded'
import CloudRoundedIcon from '@material-ui/icons/CloudRounded'
import SettingsApplicationsRoundedIcon from '@material-ui/icons/SettingsApplicationsRounded'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '360p',
    backgroundColor: theme.palette.background.paper,
  },
}))

const Navbar = () => {
  const classes = useStyles()

  const [menuBar, setMenuBar] = useState(null)

  const toggleDrawer = (isOpenBar) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setMenuBar(isOpenBar)
  }

  return (
    <React.Fragment>
      <SwipeableDrawer open={menuBar} onClose={toggleDrawer(false)} onOpen={() => {}}>
        <div className={classes.root}>
          <List component='nav' aria-label='navigation menu'>
            <NavLink className={s.link} activeClassName={s.active} to='/profile'>
              <ListItem button onClick={toggleDrawer()}>
                <ListItemIcon>
                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary='Profile' />
              </ListItem>
            </NavLink>

            <ListItem button onClick={toggleDrawer(false)}>
              <ListItemIcon>
                <EmailRoundedIcon />
              </ListItemIcon>
              <NavLink className={s.link} activeClassName={s.active} to='/dialogs'>
                <ListItemText primary='Messages' />
              </NavLink>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <PeopleAltRoundedIcon />
              </ListItemIcon>
              <NavLink className={s.link} activeClassName={s.active} to='/users'>
                <ListItemText primary='Users' />
              </NavLink>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LibraryMusicRoundedIcon />
              </ListItemIcon>
              <NavLink activeClassName={s.active} to='/music'>
                <ListItemText primary='Music' />
              </NavLink>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <CloudRoundedIcon />
              </ListItemIcon>
              <NavLink className={s.link} activeClassName={s.active} to='/weather'>
                <ListItemText primary='Weather' />
              </NavLink>
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <SettingsApplicationsRoundedIcon />
              </ListItemIcon>
              <NavLink className={s.link} activeClassName={s.active} to='/settings'>
                <ListItemText primary='Settings' />
              </NavLink>
            </ListItem>
          </List>
        </div>
      </SwipeableDrawer>
    </React.Fragment>
  )
}

export default Navbar
