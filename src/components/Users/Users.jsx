import s from './Users.module.css'

let Users = (props) => {
  return (
    <div>
      {props.users.map((user) => (
        <div key={user.id}>
          <div>
            <div>
              <img className={s.user_photo} src={user.photoUrl} alt='user' />
            </div>
            <div className='button_follow'>
              {user.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(user.id)
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(user.id)
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>

          <div className='info'>
            <div>{user.fullName}</div>
            <div>{user.status}</div>
          </div>
          <div className='location'>
            <div>{user.location.country}</div>
            <div>{user.location.city}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Users
