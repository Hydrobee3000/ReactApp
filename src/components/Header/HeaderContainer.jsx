import { connect } from 'react-redux'
import Header from './Header'
import { getAuthUserData, logout } from '../../redux/auth-reducer'

function HeaderContainer(props) {
  return <Header {...props} />
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})

export default connect(mapStateToProps, { getAuthUserData, logout })(HeaderContainer)
