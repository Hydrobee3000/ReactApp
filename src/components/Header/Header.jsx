import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

const Header = () => {
  return (
    <header className={s.header}>
      <img
        className={s.image}
        src='https://api.freelogodesign.org/files/23bfe68f1fd34f8cb61c1be389f9a975/thumb/logo_200x200.png?v=0'
      />
      <div className={s.loginBlock}>
        <NavLink to={'/login'}>Login</NavLink>
      </div>
    </header>
  )
}

export default Header
