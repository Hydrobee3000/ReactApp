import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
import Button from '@material-ui/core/Button'
import { buttonStyle } from '../common/styles/buttonStyle'

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        className={s.image}
        src='https://api.freelogodesign.org/files/23bfe68f1fd34f8cb61c1be389f9a975/thumb/logo_200x200.png?v=0'
        alt='logo'
      />
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div className={s.ButtonAndLoginText}>
            <div className={s.loginText}>{props.login} </div>
            <div>
              <Button style={buttonStyle} className={s.button} color='inherit' onClick={props.logout}>
                Log out
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <NavLink to={'/login'}>
              <Button style={buttonStyle} className={s.button} color='inherit'>
                <h3>Login</h3>
              </Button>
            </NavLink>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
