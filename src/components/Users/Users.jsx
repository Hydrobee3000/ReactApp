import Paginator from '../common/Paginator/Paginator'
import User from './User/User'

const Users = (props) => {
  return (
    <div>
      <Paginator
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
      />
      <div>
        {props.users.map((user) => (
          <User
            user={user}
            followingInProgress={props.followingInProgress}
            unfollow={props.unfollow}
            follow={props.follow}
            key={user.id}
          />
        ))}
      </div>
    </div>
  )
}

export default Users
