export const getUsers = (currentPage = 1, pageSize = 5) => {
  return fetch(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
    credentials: 'include',
  })
}
