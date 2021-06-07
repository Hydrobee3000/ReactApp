import s from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={s.menu}>
      <ul className={s.menu__list}>
        <li className={s.item}>
          <a className={s.item__link} href='#'>
            Profile
          </a>
        </li>
        <li className={s.item}>
          <a className={s.item__link} href='#'>
            Messages
          </a>
        </li>
        <li className={s.item}>
          <a className={s.item__link} href='#'>
            News
          </a>
        </li>
        <li className={s.item}>
          <a className={s.item__link} href='#'>
            Music
          </a>
        </li>
        <li className={s.item}>
          <a className={s.item__link} href='#'>
            Settings
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
