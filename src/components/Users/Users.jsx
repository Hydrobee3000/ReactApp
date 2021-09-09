import Paginator from '../common/Paginator/Paginator'
import User from './User/User'
import s from './Users.module.css'

const Users = (props) => {
  return (
    <div className={s.users__page_container}>
      <Paginator
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
        totalItemsCount={props.totalUsersCount}
        pageSize={props.pageSize}
      />
      <div className={s.users__wrapper}>
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
