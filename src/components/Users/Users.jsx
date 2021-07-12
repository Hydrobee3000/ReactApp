import s from './Users.module.css'

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          'https://invest-monitoring.com/templates/nabster/dleimages/noavatar.png',
        followed: true,
        firstName: 'John',
        lastName: 'Milkovych',
        status: 'active',
        location: { city: 'Omsk', country: 'Russia' },
      },
      {
        id: 2,
        photoUrl:
          'https://shutniki.club/wp-content/uploads/2019/11/avatarka_dlya_salona_krasoty_72_28151211.png',
        followed: false,
        firstName: 'Sam',
        lastName: 'Smith',
        status: 'I love to live ',
        location: { city: 'Moscow', country: 'Russia' },
      },
      {
        id: 3,
        photoUrl:
          'https://t3.ftcdn.net/jpg/01/62/35/58/240_F_162355863_3dt8KWeWmZMkkjl4EOApQNjSPdwbJkVD.jpg',
        followed: false,
        firstName: 'Valera',
        lastName: 'Yopt',
        status: 'run Vasya run',
        location: { city: 'Saint-Petersburg', country: 'Russia' },
      },
    ])
  }
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
