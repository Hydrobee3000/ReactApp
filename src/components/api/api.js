const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 5) {
    return fetch(baseUrl + `users?page=${currentPage}&count=${pageSize}`, {
      credentials: 'include',
    })
  },
  follow(userId) {
    return fetch(baseUrl + `/follow/${userId}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'API-KEY': 'd334ed35-7c2b-4f86-86db-09775214dcba',
      },
    })
  },
  unfollow(userId) {
    return fetch(baseUrl + `follow/${userId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'API-KEY': 'd334ed35-7c2b-4f86-86db-09775214dcba',
      },
    })
  },
  getProfile(userId) {
    return fetch(baseUrl + `profile/${userId}`)
  },
  authMyProfile() {
    return fetch(baseUrl + `auth/me`, {
      credentials: 'include',
    })
  },
}
