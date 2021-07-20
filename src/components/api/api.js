const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 5) {
    return fetch(baseUrl + `users?page=${currentPage}&count=${pageSize}`, {
      credentials: 'include',
    })
  },
  followUser(user) {
    return fetch(baseUrl + `/follow/${user.id}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'API-KEY': 'd334ed35-7c2b-4f86-86db-09775214dcba',
      },
    })
  },
  unfollowUser(user) {
    return fetch(baseUrl + `follow/${user.id}`, {
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
}
