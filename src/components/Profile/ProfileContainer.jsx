import Profile from './Profile'
import React from 'react'
import { connect } from 'react-redux'
import { getUserProfile, getStatus, updateStatus } from '../../redux/profile-reducer'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
<<<<<<< HEAD
      userId = this.props.autorizedUserId
=======
      userId = this.props.authorizedUserId
      if (!userId) {
        this.props.history.push('/login')
      }
>>>>>>> another
    }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
<<<<<<< HEAD
  autorizedUserId: state.auth.userId,
=======
  authorizedUserId: state.auth.userId,
>>>>>>> another
  isAuth: state.auth.isAuth,
})

export default compose(connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }), withRouter)(ProfileContainer)
