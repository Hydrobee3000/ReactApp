import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={s.menu}>
      <ul className={s.menu__list}>
        <li className={s.item}>
          <NavLink className={s.item__link} to='/profile'>
            Profile
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={s.item__link} to='/dialogs'>
            Messages
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={s.item__link} to='/news'>
            News
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={s.item__link} to='/music'>
            Music
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={s.item__link} to='/settings'>
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
