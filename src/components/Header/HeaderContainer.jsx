import { useEffect } from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { setAuthUserData } from '../../redux/auth-reducer'
import { usersAPI } from '../api/api'

function HeaderContainer(props) {
  useEffect(() => {
    usersAPI.myProfile
      .then((response) => response.json())
      .then((json) => {
        if (json.resultCode === 0) {
          let { id, email, login } = json.data
          props.setAuthUserData(id, email, login)
        }
      })
  })
  return <Header {...props} />
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer)
