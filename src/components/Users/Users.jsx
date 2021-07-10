import s from './Users.module.css'

let Users = (props) => {
  return (
    <div>
      {props.users.map((user) => {
        ;<div key={user.id}>
          <span>
            <div>
              <img src={user.photoUrl} />
            </div>
            <div>
              <button>Follow</button>
            </div>
          </span>

          <div>
            <p>{user.fullName}</p>
            <p>{user.status}</p>
          </div>
          <div>
            <p>{user.location.country}</p>
            <p>{user.location.city}</p>
          </div>
        </div>
      })}
    </div>
  )
}

export default Users
