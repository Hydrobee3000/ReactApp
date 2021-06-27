const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

let initialState = {
  users: [
    {
      id: 1,
      followed: true,
      firstName: 'John',
      lastName: 'Milkovych',
      status: 'active',
      location: { city: 'Omsk', country: 'Russia' },
    },
    {
      id: 2,
      followed: false,
      firstName: 'Sam',
      lastName: 'Smith',
      status: 'I love to live ',
      location: { city: 'Moscow', country: 'Russia' },
    },
    {
      id: 3,
      followed: false,
      firstName: 'Valera',
      lastName: 'Yopt',
      status: 'run Vasya run',
      location: { city: 'Saint-Petersburg', country: 'Russia' },
    },
  ],
  newPostText: 'Hello',
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true }
          }
          return user
        }),
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false }
          }
          return user
        }),
      }

    default:
      return state
  }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })

export default usersReducer
