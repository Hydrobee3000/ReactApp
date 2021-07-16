import { connect } from 'react-redux'
import {
  followAC,
  setUsersAC,
  unfollowAC,
  setCurrentPageAC,
  setUsersTotalCountAC,
  toggleIsFetchingAC,
} from '../../redux/users-reducer'
import React from 'react'
import preloader from '../../assets/images/preloader.svg'
import Users from './Users'

class UsersContainer extends React.Component {
  componentDidMount() {
    fetch(
      `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
    )
      .then((response) => response.json())
      .then((json) => {
        this.props.setUsers(json.items)
        this.props.setTotalUsersCount(json.totalCount)
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    fetch(
      `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
    )
      .then((response) => response.json())
      .then((json) => {
        this.props.setUsers(json.items)
      })
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <img src={preloader} /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
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
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setUsersTotalCountAC(totalCount))
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
