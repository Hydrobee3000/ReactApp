import { authAPI } from '../components/api/api'
const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
        isAuth: true,
      }

    default:
      return state
  }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
})
export const getAuthUserData = () => (dispatch) => {
  authAPI
    .me()
    .then((response) => response.json())
    .then((json) => {
      if (json.resultCode === 0) {
        let { id, email, login } = json.data
        dispatch(setAuthUserData(id, email, login, true))
      }
    })
}

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI
    .login(email, password, rememberMe)
    .then((response) => response.json())
    .then((json) => {
      if (json.resultCode === 0) {
        dispatch(getAuthUserData())
      }
    })
}

export const logout = () => (dispatch) => {
  authAPI
    .login()
    .then((response) => response.json())
    .then((json) => {
      if (json.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
      }
    })
}

export default authReducer
