import * as axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'd334ed35-7c2b-4f86-86db-09775214dcba',
  },
})

/* API for users actions */

export const usersAPI = {
  //get data about all users
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => {
      return response.data
    })
  },
  //subscribe to user
  follow(userId) {
    return instance.post(`follow/${userId}`)
  },
  //unsubscribe to user
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
  },
  getProfile(userId) {
    console.warn('Obsolete method. Please profileAPI object.')
    return profileAPI.getProfile(userId)
  },
}

/* API for profile actions */

export const profileAPI = {
  //get profile data of a unique user
  getProfile(userId) {
    return instance.get(`profile/` + userId)
  },
  //get status data of a unique user
  getStatus(userId) {
    return instance.get(`profile/status/` + userId)
  },
  //set status data
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status })
  },
  //save photo in own profile
  savePhoto(file) {
    const formData = new FormData()
    formData.append('image', file)
    return instance.put(`profile/photo`, formData)
  },
}

/* API for authorization actions  */

export const authAPI = {
  // getting authorization information when the app is loaded
  me() {
    return instance.get(`auth/me`)
  },
  //log in to the application if you not logged in yet
  login(email, password, rememberMe = false, captcha = null) {
    return instance.post(`auth/login`, { email, password, rememberMe, captcha })
  },
  //log out of the application if you are already logged in
  logout() {
    return instance.delete(`auth/login`)
  },
}

/* API for security actions  */

export const securityAPI = {
  //get captcha image when user entered incorrect login
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`)
  },
}
