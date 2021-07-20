import { connect } from 'react-redux'
import {
  follow,
  setUsers,
  unfollow,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleIsFollowingProgress,
} from '../../redux/users-reducer'
import React from 'react'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import { usersAPI } from '../api/api'

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)

    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((response) => response.json())
      .then((json) => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(json.items)
        this.props.setTotalUsersCount(json.totalCount)
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)
    usersAPI
      .getUsers(pageNumber, this.props.pageSize)
      .then((response) => response.json())
      .then((json) => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(json.items)
      })
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
}

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleIsFollowingProgress,
})(UsersContainer)
