import { useEffect } from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { setAuthUserData } from '../../redux/auth-reducer'

function HeaderContainer(props) {
  useEffect(() => {
    fetch(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.resultCode === 0) {
          let { id, email, login } = json.data
          props.setAuthUserData(id, email, login)
        }
        // props.setUsers(json.items)
      })
  })
  return <Header {...props} />
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer)
