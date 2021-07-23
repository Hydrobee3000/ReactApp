import Profile from './Profile'
import React from 'react'
import { connect } from 'react-redux'
import { getUserProfile } from '../../redux/profile-reducer'
import { Redirect, withRouter } from 'react-router-dom'

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }
    this.props.getUserProfile(userId)
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />
  }
}

const authRedirectComponent = (props) => {
  if (!props.isAuth) return <Redirect to='/login' />

  return <ProfileContainer {...props} />
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
})

let WithUrlDataContainerComponent = withRouter(authRedirectComponent)

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent)
