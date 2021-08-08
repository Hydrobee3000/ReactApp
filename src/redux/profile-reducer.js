import { profileAPI, usersAPI } from '../components/api/api'
const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
  posts: [
    { id: 1, message: 'hi', likesCount: 12 },
    { id: 2, message: 'hello', likesCount: 5 },
  ],
  profile: null,
  status: '',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 3,
        message: action.newPostText,
        likesCount: 0,
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      }
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      }
    }

    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      }
    }

    default:
      return state
  }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const getUserProfile = (userId) => (dispatch) => {
  usersAPI
    .getProfile(userId)
    .then((response) => response.json())
    .then((json) => {
      dispatch(setUserProfile(json))
    })
}
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const getStatus = (userId) => (dispatch) => {
  profileAPI
    .getStatus(userId)
    .then((response) => response.json())
    .then((json) => {
      dispatch(setStatus(json))
    })
}
export const updateStatus = (status) => (dispatch) => {
  profileAPI
    .updateStatus(status)
    .then((response) => response.json())
    .then((json) => {
      if (json.resultCode === 0) {
        dispatch(setStatus(json))
      }
    })
}

export default profileReducer
