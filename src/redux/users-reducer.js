const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
  users: [
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
  ],
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

    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] }

    default:
      return state
  }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer
