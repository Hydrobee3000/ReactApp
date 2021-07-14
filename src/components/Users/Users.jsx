import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import React from 'react'

class Users extends React.Component {
  componentDidMount() {
    fetch(
      `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
    )
      .then((response) => response.json())
      .then((json) => {
        this.props.setUsers(json.items)
      })
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return (
      <div>
        <div>
          {pages.map((p) => {
            return (
              <span
                className={this.props.currentPage === p && s.selectedPage}
                onClick={() => {
                  this.props.setCurrentPage(p)
                }}
              >
                {p}
              </span>
            )
          })}
        </div>
        {this.props.users.map((user) => (
          <div key={user.id}>
            <div>
              <div>
                <img
                  className={s.user_photo}
                  src={
                    user.photos.small != null ? user.photos.small : userPhoto
                  }
                  alt='user'
                />
              </div>
              <div className='button_follow'>
                {user.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(user.id)
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(user.id)
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>

            <div className='info'>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </div>
            <div className='location'>
              <div>{'user.location.country'}</div>
              <div>{'user.location.city'}</div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Users
