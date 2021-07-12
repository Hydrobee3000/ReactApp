import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import React from 'react'

class Users extends React.Component {
  getUsers = () => {
    if (this.props.users.length === 0) {
      fetch('https://social-network.samuraijs.com/api/1.0/users')
        .then((response) => response.json())
        .then((json) => {
          this.props.setUsers(json.items)
        })
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.getUsers}>Get Users</button>
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
