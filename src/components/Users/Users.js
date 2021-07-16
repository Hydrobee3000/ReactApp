let Users = (props) => {
  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={this.props.currentPage === p && s.selectedPage}
              onClick={(e) => {
                this.onPageChanged(p)
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
                src={user.photos.small != null ? user.photos.small : userPhoto}
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
