import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
import Divider from '@material-ui/core/Divider'

const Navbar = (props) => {
  return (
    <nav className={s.menu}>
      <div className={s.item}>
        <NavLink className={s.link} activeClassName={s.active} onClick={props.toggleDrawer(false)} to='/profile'>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={s.link} activeClassName={s.active} onClick={props.toggleDrawer(false)} to='/dialogs'>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={s.link} activeClassName={s.active} onClick={props.toggleDrawer(false)} to='/users'>
          Users
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={s.link} activeClassName={s.active} onClick={props.toggleDrawer(false)} to='/weather'>
          Weather
        </NavLink>
      </div>
      <Divider />

      <div className={s.item}>
        <NavLink className={s.link} activeClassName={s.active} onClick={props.toggleDrawer(false)} to='/settings'>
          Settings
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
