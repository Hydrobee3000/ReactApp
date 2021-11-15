import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

// nested in the Header

const Navbar = (props) => {
  return (
    <nav className={s.menu}>
      <div className={s.item}>
        <NavLink className={s.link} activeClassName={s.active} onClick={props.onClose()} to='/profile'>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={s.link} activeClassName={s.active} onClick={props.onClose()} to='/dialogs'>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={s.link} activeClassName={s.active} onClick={props.onClose()} to='/users'>
          Users
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={s.link} activeClassName={s.active} onClick={props.onClose()} to='/weather'>
          Weather
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={s.link} activeClassName={s.active} onClick={props.onClose()} to='/converter'>
          Currency
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
