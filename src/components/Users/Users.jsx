import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom'

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

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
              className={props.currentPage === p && s.selectedPage}
              onClick={(e) => {
                props.onPageChanged(p)
              }}
            >
              {p}
            </span>
          )
        })}
      </div>

      {props.users.map((user) => (
        <div key={user.id}>
          <div>
            <div>
              <NavLink to={'/profile/' + user.id}>
                <img
                  className={s.user_photo}
                  src={user.photos.small != null ? user.photos.small : userPhoto}
                  alt='user'
                />
              </NavLink>
            </div>
            <div className='button_follow'>
              {user.followed ? (
                <button
                  onClick={() => {
                    fetch(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                      method: 'DELETE',
                      credentials: 'include',
                      headers: {
                        'API-KEY': 'd334ed35-7c2b-4f86-86db-09775214dcba',
                      },
                    })
                      .then((response) => response.json())
                      .then((json) => {
                        if (json.resultCode == 0) {
                          props.unfollow(user.id)
                        }
                      })
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    fetch(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                      method: 'POST',
                      credentials: 'include',
                      headers: {
                        'API-KEY': 'd334ed35-7c2b-4f86-86db-09775214dcba',
                      },
                    })
                      .then((response) => response.json())
                      .then((json) => {
                        if (json.resultCode == 0) {
                          props.follow(user.id)
                        }
                      })
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

export default Users
