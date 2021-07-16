import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import React from 'react'

class UsersAPIComponent extends React.Component {
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
    

    return <Users />
  }
}

export default UsersAPIComponent
