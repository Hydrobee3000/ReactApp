import { stopSubmit } from 'redux-form'
import { authAPI, securityAPI } from '../components/api/api'

const SET_USER_DATA = 'SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'

export type InitialStateType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
  captchaUrl: string | null //if null, then captcha is not required
}

let initialState: InitialStateType = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null, //if null, then captcha is not required
}

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}

type SetAuthUserDataActionPayloadType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}
type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA
  payload: SetAuthUserDataActionPayloadType
}

export const setAuthUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): SetAuthUserDataActionType => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
})

type getCaptchaUrlSuccessActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS
  payload: { captchaUrl: string }
}

export const getCaptchaUrlSuccess = (captchaUrl: string): getCaptchaUrlSuccessActionType => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
})

export const getAuthUserData = () => async (dispatch: any) => {
  const response = await authAPI.me()

  if (response.data.resultCode === 0) {
    const { id, login, email } = response.data.data
    dispatch(setAuthUserData(id, email, login, true))
  }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: any) => async (dispatch: any) => {
  const response = await authAPI.login(email, password, rememberMe, captcha)

  if (response.data.resultCode === 0) {
    //success, get auth data
    dispatch(getAuthUserData())
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptchaUrl())
    }
    const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
    dispatch(stopSubmit('login', { _error: message }))
  }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptchaUrl()
  const captchaUrl = response.data.url
  dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch: any) => {
  const response = await authAPI.logout()

  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}

export default authReducer
