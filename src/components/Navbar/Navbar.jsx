import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
import Divider from '@material-ui/core/Divider'

const Navbar = () => {
  return (
    <nav className={s.menu}>
      <div className={s.item}>
        <NavLink className={s.link} activeClassName={s.active} to='/profile'>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={s.link} activeClassName={s.active} to='/dialogs'>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={s.link} activeClassName={s.active} to='/users'>
          Users
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={s.link} activeClassName={s.active} to='/music'>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={s.link} activeClassName={s.active} to='/weather'>
          Weather
        </NavLink>
      </div>
      <Divider />

      <div className={s.item}>
        <NavLink className={s.link} activeClassName={s.active} to='/settings'>
          Settings
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
