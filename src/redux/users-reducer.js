const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState = {
  users: [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Milkovych',
      status: 'active',
      location: { city: 'Omsk', country: 'Russia' },
    },
    {
      id: 2,
      firstName: 'Sam',
      lastName: 'Smith',
      status: 'I love to live ',
      location: { city: 'Moscow', country: 'Russia' },
    },
    {
      id: 3,
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
    default:
      return state
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
})

export default usersReducer
